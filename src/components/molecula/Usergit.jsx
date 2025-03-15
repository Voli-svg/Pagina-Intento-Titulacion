import './UserGit.css'
const UserGit = (props)=>{
    const {id,estado, title,comments,comments_url,author_association
    } = props


return(<div key={id} style={{}} className="GitUser">
        <h3>title: {title}</h3>
    <p>id={id}</p>
    <p>estado = {estado}</p>
    <p>comentarios:{comments} {comments_url}</p> 
    <p>asosiasion del author: {author_association}</p>
    
    </div>  
)
}
export default UserGit 