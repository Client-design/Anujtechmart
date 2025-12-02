// src/Components/Profile.jsx
import React from 'react';
import { useAppContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import { auth, signOut } from '../firebase'; // FIX: Import auth to use with signOut()

const Profile = () => {
  // Get the current user object from the global state
  const { user } = useAppContext();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Use the Firebase signOut function with the imported auth object
      navigate('/'); // Redirect to the home page after signing out
      console.log("User signed out successfully.");
    } catch (error) {
      console.error("Sign out error:", error.message);
      // Optionally set an error state here
    }
  };
  
  // Use the email as the main identifier, and derive a simple name
  const displayName = user?.email || "Guest User";
  const userEmail = user?.email || "N/A";

  // Minimal Static Order History Placeholder Data
  const orders = [
    { id: 'ORD001', date: 'Dec 1, 2025', total: 799, items: 1, status: 'Delivered' },
    { id: 'ORD002', date: 'Nov 25, 2025', total: 1248, items: 3, status: 'Shipped' },
    { id: 'ORD003', date: 'Oct 10, 2025', total: 249, items: 1, status: 'Cancelled' },
  ];

  return (
    <div className="profile-container">
      <h2>My Anuj Tech Mart Account</h2>

      <div className="user-info">
        <h3>👤 Profile Details</h3>
        <p><strong>Name (Placeholder):</strong> {displayName.split('@')[0].toUpperCase()}</p>
        <p><strong>Email:</strong> {userEmail}</p>
        <p><strong>Member Since:</strong> {user?.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}</p>
      </div>

      <hr />

      <div className="order-history">
        <h3>📦 My Orders (Minimal Placeholder)</h3>
        {orders.map(order => (
          <div key={order.id} className={`order-summary status-${order.status.toLowerCase()}`}>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Total:</strong> ₹{order.total}</p>
            <p><strong>Status:</strong> <span className="order-status-badge">{order.status}</span></p>
          </div>
        ))}
      </div>

      <button onClick={handleSignOut} className="signout-button">
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
