import React, { useEffect, useState } from 'react';
import { fetchTickets, createTicket } from '../api/ticketService';

interface Ticket {
    id: number;
    title: string;
    description: string;
    status: string;
}

const Dashboard: React.FC = () => {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        const init = async () => {
            try {
                const fetchedTickets = await fetchTickets();
                setTickets(fetchedTickets);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        init();
    }, []);

    const handleCreateTicket = async () => {
        try {
            const newTicket = await createTicket({ title, description, status: 'open' });
            setTickets([...tickets, newTicket]);  // Add the new ticket to the list
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error creating ticket:', error);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Dashboard</h2>
            <div>
                <h3>Create Ticket</h3>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button onClick={handleCreateTicket}>Create Ticket</button>
            </div>
            <div>
                <h3>Current Tickets</h3>
                <ul>
                    {tickets.map(ticket => (
                        <li key={ticket.id}>
                            {ticket.title} - {ticket.status}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
