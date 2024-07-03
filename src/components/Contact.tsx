function Contact() {
  return (
    <section id="contact">
      <h2 className="font-bold text-2xl">Contacto</h2>
      <form action="">
        <label htmlFor="name">Nombre</label>
        <input id="name" type="text" placeholder="Nombre" />
        <label htmlFor="email">Correo electrónico</label>
        <input id="email" type="email" placeholder="Correo electrónico" />
        <label htmlFor="message">Escribe tu mensaje</label>
        <input id="message" type="text" placeholder="Escribe tu mensaje" />
        <button>Enviar</button>
      </form>
    </section>
  )
}

export default Contact