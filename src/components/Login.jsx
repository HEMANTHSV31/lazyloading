import React from 'react'

const Login = ({ closeLogin }) => (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block">Email</label>
            <input type="email" id="email" className="border p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block">Password</label>
            <input type="password" id="password" className="border p-2 w-full" />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeLogin}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
            <button
              type="submit"
              className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  export default Login;
