import './App.css';
import InlineStyle from './components/InlineStyle';
import StyleSheets from './components/StyleSheets';
import Form from './components/Form';
// problem is if 'line 21' is used in any other component, it will be applied there as well
import './appStyles.css'

// css modules are imported this way.
// it cannot be used in any other component as it can be used using variable 'styles'
import styles from './appStyles.module.css'; 
import LifecycleA from './components/LifecycleA';
import LifecycleC from './components/LifecycleC';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefDemo from './components/RefDemo';
import FocusInput from './FocusInput';
import ParentForwardRef from './components/ParentForwardRef';
import Portal from './components/Portal';
import Hero from './Hero';
import ErrorBoundary from './components/ErrorBoundary';

function App() {


  return (
    /*
      css styling
    
      <StyleSheets primary={false}/>
      <InlineStyle/>
    
      <div>
    
        <h1 className="error">Error (using basic css stylesheets)</h1>
        <h1 className={styles.success}>Success using css modules </h1>
      </div>
    */
    /*
      form handling
      <Form/>
    */
    /*
      mounting stage lifecycle methods
      <LifecycleA/>
    */
    /*
      updating stage lifecycle methods
    
    <LifecycleC/>
    */
    
    /* React fragments 
    <Table/>
    */

    /* pure components 
    <ParentComp/>
    */

    /* memo
    <ParentComp/>
    */
    
    /* create refs
    <RefDemo/>
    */

    /* refs with class component 
    <FocusInput/>
    */

    /* forwarding refs 
    <ParentForwardRef/>
    */

    /* portal 
    <Portal/>
    */

    /* error boundary */
    <>
    <ErrorBoundary>
      <Hero heroName="Batman"/>
    </ErrorBoundary>
    
    <ErrorBoundary>
      <Hero heroName="Joker"/>
    </ErrorBoundary>
    </>
  );
}

export default App;
