import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

// eslint-disable-next-line no-undef
export const UserProfile = (): JSX.Element => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <div>
        <div style={{ display: 'flex' }}>
          <Link href="/api/auth/login" passHref>
            <div style={{ background: 'green', color: 'white' }}>Login</div>
          </Link>
          <Link href="/api/auth/logout" passHref>
            <div style={{ background: 'red', color: 'white' }}>Logout</div>
          </Link>
        </div>
        {user && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
