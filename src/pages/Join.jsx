import { useEffect } from 'react';

const Join = () => {
  useEffect(() => {
    // Redirect to comprehensive application form on Netlify
    window.location.href = 'https://go4me-join-page.netlify.app/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to application form...</p>
      </div>
    </div>
  );
};

export default Join;

