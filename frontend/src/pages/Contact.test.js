import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import Contact from './Contact';
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';


// Mock axios
jest.mock('axios');

// Mock Notification component
jest.mock('./Notification', () => {
  return function MockNotification({ notification, type }) {
    return notification ? <div data-testid="notification" data-type={type}>{notification}</div> : null;
  };
});

describe('Contact Component', () => {
  // Mock data
  const mockOrganizations = [
    { id: '1', name: 'Organization 1' },
    { id: '2', name: 'Organization 2' }
  ];

  const mockAccessToken = 'mock-token';
  const mockStudentId = '123';

  beforeEach(() => {
    // Clear all mocks
    jest.clearAllMocks();
    
    // Mock localStorage
    const localStorageData = {
      'loggedInUser': JSON.stringify({ access_token: mockAccessToken }),
      'studentId': mockStudentId
    };
    
    global.localStorage = {
      getItem: jest.fn(key => localStorageData[key]),
      setItem: jest.fn(),
      clear: jest.fn()
    };

    // Setup default axios mock for organizations
    axios.get.mockResolvedValue({ data: mockOrganizations });
  });

  test('renders all form sections', async () => {
    render(<Contact />);
    
    expect(screen.getByText('Contact Form')).toBeInTheDocument();
    expect(screen.getByText('Education Form')).toBeInTheDocument();
    expect(screen.getByText('Experience Form')).toBeInTheDocument();
  });

//   test('loads organizations on mount', async () => {
//     render(<Contact />);

//     expect(axios.get).toHaveBeenCalledWith('/api/v1/organisations', {
//       headers: {
//         'access-control-allow-origin': '*',
//         Authorization: `Bearer ${mockAccessToken}`,
//       },
//     });

//     await waitFor(() => {
//       const select = screen.getByLabelText('Organization');
//       expect(select).toBeInTheDocument();
//       expect(screen.getByText('Organization 1')).toBeInTheDocument();
//     });
//   });

  test('updates form fields when user types', async () => {
    render(<Contact />);

    const emailInput = screen.getByLabelText('Email');
    const contactInput = screen.getByLabelText('Contact Number');
    const addressInput = screen.getByLabelText('Address');

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(contactInput, '1234567890');
    await userEvent.type(addressInput, 'Test Address');

    expect(emailInput.value).toBe('test@example.com');
    expect(contactInput.value).toBe('1234567890');
    expect(addressInput.value).toBe('Test Address');
  });

  test('handles form submission successfully', async () => {
    render(<Contact />);

    // Fill form fields
    await userEvent.type(screen.getByLabelText('Email'), 'test@example.com');
    await userEvent.type(screen.getByLabelText('Contact Number'), '1234567890');
    await userEvent.type(screen.getByLabelText('Address'), 'Test Address');

    // Mock successful submission
    axios.mockResolvedValueOnce({ data: { success: true } });

    // Submit form
    fireEvent.click(screen.getByText('Submit Form'));

    await waitFor(() => {
      expect(screen.getByText('Registration Successful')).toBeInTheDocument();
    });
  });

  test('handles form submission error', async () => {
    render(<Contact />);

    // Fill minimum required field
    await userEvent.type(screen.getByLabelText('Email'), 'test@example.com');

    // Mock failed submission
    axios.mockRejectedValueOnce(new Error('Registration failed'));

    // Submit form
    fireEvent.click(screen.getByText('Submit Form'));

    await waitFor(() => {
      expect(screen.getByText('Alumni is Already Registered')).toBeInTheDocument();
    });
  });

  test('notification disappears after timeout', async () => {
    jest.useFakeTimers();
    render(<Contact />);

    // Mock error and submit
    axios.mockRejectedValueOnce(new Error('Registration failed'));
    fireEvent.click(screen.getByText('Submit Form'));

    await waitFor(() => {
      expect(screen.getByText('Alumni is Already Registered')).toBeInTheDocument();
    });

    // Advance timers
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      expect(screen.queryByText('Alumni is Already Registered')).not.toBeInTheDocument();
    });

    jest.useRealTimers();
  });

  test('sets default organization ID on load', async () => {
    render(<Contact />);
    
    await waitFor(() => {
      const select = screen.getByLabelText('Organization');
      expect(select).toBeInTheDocument();
      expect(select.value).toBe(mockOrganizations[0].id);
    });
  });
});