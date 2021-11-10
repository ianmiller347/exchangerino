import { render, screen } from '@testing-library/react';
import Exchangerino from '.';

describe('rendering Exchangerino', () => {
  it('should render Exchangerino', () => {
    render(<Exchangerino />);
    expect(screen.getByRole('heading')).toHaveTextContent('This is not yours.');
  });
});
