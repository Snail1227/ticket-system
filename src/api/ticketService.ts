const API_URL = 'https://your-api-url.com';

interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
}

export const fetchTickets = async (): Promise<Ticket[]> => {
  const response = await fetch(`${API_URL}/tickets`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`, 
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch tickets');
  }

  const tickets: Ticket[] = await response.json();
  return tickets;
};

export const createTicket = async (ticket: Ticket): Promise<Ticket> => {
  const response = await fetch(`${API_URL}/tickets`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ticket),
  });

  if (!response.ok) {
    throw new Error('Failed to create ticket');
  }

  const newTicket: Ticket = await response.json();
  return newTicket;
};
