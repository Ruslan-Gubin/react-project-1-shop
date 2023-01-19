import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import axios from 'axios';
import { AsyncTesting } from './AsyncTesting';
import { testDataUsers } from './testDataUsers';

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AsyncTesting component test async', () => {
  let response: any;

  beforeEach(() => {
    response = testDataUsers
  })

  it('Check component ', async () => {
    render(<AsyncTesting />)
    const check = screen.getByText('Check in Document')
    expect(check).toBeInTheDocument()
  })
  it('Check component ', async () => {
    mockedAxios.get.mockReturnValue(response)
    render(<AsyncTesting />)
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(3)
    // expect(axios.get).toBeCalledTimes(1);
  })
  
  
})