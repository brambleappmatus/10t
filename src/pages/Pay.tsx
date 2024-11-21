export default function Pay() {
  return (
    <div className="min-h-screen pt-24 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Pay Me</h1>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 mb-6">
            This page will be integrated with Stripe for payments. For now, it's a placeholder.
          </p>
          
            <a
              href="https://revolut.me/attymatty"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button
                className="w-full bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition-colors"
              >
                Proceed to Payment
              </button>
            </a>
        </div>
      </div>
    </div>
  );
}