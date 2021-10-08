import '../GitJs/GitJs.scss'


const GitJs = () => {
  return (
    <div>
      <h2>Inicio ISSUE</h2>
      <pre className="pre">
        <code className="code" >
          git checkout main
          <br />
          git pull origin main
          <br />
          git checkout -b elvix/64 origin/main
        </code>
      </pre>
    </div>
  )
}

export default GitJs