import { render, screen, fireEvent } from '@testing-library/react';
import AdvanceForm from '../pages/AdvanceForm';

describe('AdvanceForm', () => {
  test('renders inputs and button', () => {
    render(<AdvanceForm />);
    expect(screen.getByLabelText(/Title:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Author:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument();
  });

  test('does not trigger search on empty submit', () => {
    render(<AdvanceForm />);
    fireEvent.click(screen.getByRole('button', { name: /Search/i }));
    expect(screen.queryByText(/Results/i)).not.toBeInTheDocument();
  });
});
