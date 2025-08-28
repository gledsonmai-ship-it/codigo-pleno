return (
  <Router>
    <header style={{ background: 'var(--cor-primaria)', padding: '1rem' }}>
      <h1 style={{ color: 'white', margin: 0 }}>Código Pleno</h1>
      <nav style={{ marginTop: '0.5rem' }}>
        <NavLink to="/" style={({ isActive }) => ({
          color: isActive ? 'var(--cor-destaque)' : 'white',
          marginRight: '1rem',
          textDecoration: 'none',
          fontWeight: 'bold'
        })}>Institucional</NavLink>
        <NavLink to="/login" style={({ isActive }) => ({
          color: isActive ? 'var(--cor-destaque)' : 'white',
          marginRight: '1rem',
          textDecoration: 'none',
          fontWeight: 'bold'
        })}>Login</NavLink>
        <NavLink to="/painel" style={({ isActive }) => ({
          color: isActive ? 'var(--cor-destaque)' : 'white',
          marginRight: '1rem',
          textDecoration: 'none',
          fontWeight: 'bold'
        })}>Painel</NavLink>
        <NavLink to="/descoberta/temperamento" style={({ isActive }) => ({
          color: isActive ? 'var(--cor-destaque)' : 'white',
          textDecoration: 'none',
          fontWeight: 'bold'
        })}>Descoberta</NavLink>
      </nav>
    </header>

    <main style={{ padding: '2rem' }}>
      <Routes>
        {/* suas rotas aqui */}
      </Routes>
    </main>
  </Router>
);