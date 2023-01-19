import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import  {TestTask}  from './TestTask';


describe('TestTask component test ', () => {

  it('Check Link about ',  () => {
    render(
      <MemoryRouter>
    <TestTask />
      </MemoryRouter>
    )
    const aboutLink =  screen.getByTestId('about-link')
    userEvent.click(aboutLink)
    expect(screen.getByText('about')).toBeInTheDocument()
  })
  it('Check Link main ',  () => {
    render(
      <MemoryRouter>
    <TestTask />
      </MemoryRouter>
    )
    const mainLink =  screen.getByTestId('main-link')
    userEvent.click(mainLink)
    expect(screen.getByText(/main/i)).toBeInTheDocument()
  })
  // it('Check Link no page ',  () => {
  //   render(
  //     <MemoryRouter initialEntries={['/test/sdhfhshs']}>
  //   <TestTask />
  //     </MemoryRouter>
  //   )
  //   expect(screen.getByText('not')).toBeInTheDocument()
  // })
 
  
})