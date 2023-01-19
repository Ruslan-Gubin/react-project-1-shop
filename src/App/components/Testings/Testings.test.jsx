import '@testing-library/jest-dom';
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Testings} from './Testings';

describe('Testings component', () => {

  
  it('render Testings components ', () => {
    render(<Testings />)
    const hellowWorldElem = screen.getByText(/Hello world/i);
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input text/i)
    expect(btn).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(hellowWorldElem).toBeInTheDocument()
    expect(input).toMatchSnapshot()
  })
  it('Testings components is not Hello world2', () => {
    render(<Testings />)
    expect(screen.queryByText(/world2/i)).toBeNull()
  })
  it('Testings async element ', async () => {
    render(<Testings />)
    const elem = await screen.findByText(/data/i)
    expect(elem).toBeInTheDocument()
    expect(elem).toHaveStyle({color: 'red'})
  })
  it('Toggle event ', async () => {
    render(<Testings />)
   const btn = screen.getByTestId('toggle-btn')
   expect(screen.queryByTestId('toggle-elem')).toBeNull()
   fireEvent.click(btn)
   expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
   fireEvent.click(btn)
   expect(screen.queryByTestId('toggle-elem')).toBeNull()
  })
  it('Input event ', async () => {
    render(<Testings />)
    const input = screen.getByPlaceholderText(/input text../i)
   expect(screen.queryByTestId('value-elem')).toContainHTML('')
   fireEvent.input(input, {
    target: {value: '123123'}
   })
   expect(screen.queryByTestId('value-elem')).toContainHTML('123123')
   expect(screen.queryByTestId('value-elem')).not.toBeNull()
  })
  test('Input User event ', async () => {
    render(<Testings />)
    const input = screen.getByPlaceholderText(/input text../i)
   expect(screen.getByTestId('value-elem')).toContainHTML('')
 await  userEvent.type(input, '123123')
   expect(screen.queryByTestId('value-elem')).toContainHTML('123123')
  })
  
})