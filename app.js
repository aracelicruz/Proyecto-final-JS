document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const commentText = document.getElementById('commentText').value;
    if(commentText) {
        addComment(commentText);
        document.getElementById('commentText').value = ''; // Limpiar el campo de texto
    }
});

function addComment(comment) {
    const commentSection = document.getElementById('commentsSection');
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    
    const commentDate = new Date().toLocaleString(); // Fecha y hora actual
    newComment.innerHTML = `
        <p>${comment}</p>
        <p><strong>Publicado el: </strong>${commentDate}</p>
        <button onclick="deleteComment(this)">Eliminar</button>
    `;
    
    commentSection.appendChild(newComment);
}

function deleteComment(button) {
    const comment = button.parentElement;
    comment.remove();
}
