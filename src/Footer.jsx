function Footer() {
  let year = new Date().getFullYear()
  let githubUrl = "https://github.com/helloimshanae"

  return (
    <footer>
      <p>&copy; {year} helloimshanae</p>
      <p>
        <a href={githubUrl}>Visit my GitHub profile</a>
      </p>
    </footer>
  )
}

export default Footer