const logout = async () => {
  console.log('starting logout.js')
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    console.log('logged out successfully');
    document.location.replace('/');
  } else {
    console.log('failed to log out');
    alert('Failed to log out.');
  }
};
