import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "blue";
  {/*
  Note:
  Imported components:
  1.) <Stack> This is a layout component used to group elements together and apply a space between them
  1.1 There are variations: 
  VStack -> used to stack elements in the vertical direction
  HStack -> used to stack elements in the horizontal direction
  2.) <Divider/> are used to visually separate content in a list or group, it displays a thin horizontal or vertical line
  and renders an hr tag.
  3.) <Text> is used to render text and paragraphs within an interface
  4.) <ButtonGroup> is used to group buttons whose actions are related with an optiomn to flush them together
  */}
  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Experience color={color} />
      <Projects color={color} />
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
