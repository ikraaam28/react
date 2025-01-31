import React, { Component } from 'react';  // Assurez-vous d'importer React et Component

class Button extends Component {
    render() { 
        return (
            <button className="btn btn-primary">
                button{/* Affiche le contenu passé au composant */}
            </button>
        );
    }
}

export default Button;
