// Search.test.jsx

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Search from './Search';

jest.mock('axios');

describe('Search Component', () => {
  beforeEach(() => {
    localStorage.setItem('loggedInUser', JSON.stringify({ access_token: 'mocked-token' }));
  });

  afterEach(() => {
    localStorage.clear();
    jest.resetAllMocks();
  });

  test('renders the search form correctly', () => {
    render(<Search />);
    
    expect(screen.getByLabelText(/Graduation Year/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument();
  });

  test('displays alumni data when records are found', async () => {
    const mockData = [
      {
        name: 'John Doe',
        student_id: 1,
        graduation_year: 2022,
        roll_no: '12345',
      },
    ];
    axios.get.mockResolvedValueOnce({ data: mockData });
    
    render(<Search />);
    
    fireEvent.change(screen.getByLabelText(/Graduation Year/i), { target: { value: '2022' } });
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.click(screen.getByRole('button', { name: /Search/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/John Doe/)).toBeInTheDocument();
      expect(screen.getByText(/12345/)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /CLICK/i })).toBeInTheDocument();
    });
  });

  test('handles token retrieval and axios header setup', async () => {
    axios.get.mockResolvedValueOnce({ data: [] });
    
    render(<Search />);
    
    fireEvent.change(screen.getByLabelText(/Graduation Year/i), { target: { value: '2022' } });
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.click(screen.getByRole('button', { name: /Search/i }));
    
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        '/api/v1/student/search?graduationYear=2022&name=John',
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: 'Bearer mocked-token',
          }),
        }),
      );
    });
  });

  test('displays the contact form when a record is clicked', async () => {
    const mockData = [
      {
        name: 'John Doe',
        student_id: 1,
        graduation_year: 2022,
        roll_no: '12345',
      },
    ];
    axios.get.mockResolvedValueOnce({ data: mockData });
    
    render(<Search />);
    
    fireEvent.change(screen.getByLabelText(/Graduation Year/i), { target: { value: '2022' } });
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.click(screen.getByRole('button', { name: /Search/i }));
    
    await waitFor(() => {
      fireEvent.click(screen.getByRole('button', { name: /CLICK/i }));
      expect(screen.getByText(/Contact Form/i)).toBeInTheDocument(); // Assuming Contact component renders "Contact Form"
    });
  });
});
