import { type ReactNode } from 'react';
import { getUsers } from './actions.ts';

export default async function Page(): Promise<ReactNode> {
  const users = await getUsers();
  return (
    <main>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.id}</li>
        ))}
      </ul>
    </main>
  );
}
