function Login() {
  const login = () => {
    localStorage.setItem("user", "logged");
    alert("Login Success");
  };

  return (
    <div className="text-center mt-10">
      <button onClick={login} className="bg-green-500 text-white px-4 py-2">
        Login
      </button>
    </div>
  );
}

export default Login;