import styles from '@/styles/Home.module.css';
import React, { Component } from 'react';

export default class ErrorBoundary extends React.Component {
 constructor(props){
  super(props);
 // This state Variable allows us to create a target response when an error is null
 this.state = { hasError: false };
}

static getDerivedStateFromError(error){
  // The State Variable is Updated to return an error if an error is present

 return { hasError: true };

}

 componentDidCatch(error, errorHandler){
// The console receives a message from the Server and renders on the Browsers console the error present and the message.
 console.log({error, errorHandler});

}

// Render The Error UI
 render () { 
  // Call the this.state function if an error is in occurrence.
 if (this.state.hasError){
  return (
   <main className={styles.Aboutcontent}>
   <h1> A States of The Arts Error has Occured </h1>
   <button onclick={ () => this.setState({ hasError : false })} className={styles.Button}>
 Reload Content
   </button>
  </main>
         );
  };
 // Return Parent UI if error does not occur.
 return this.props.children;

 };
};
    
  
 
  
 