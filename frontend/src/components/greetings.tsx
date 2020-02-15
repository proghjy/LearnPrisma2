import * as React from 'react';

type GreetingsProps = {
  name: string
  mark: string
  optional?: string
  children: React.ReactNode
  onClick: (name: String) => void
};

const Greetings = ({ name, mark, optional, children, onClick }: GreetingsProps) => {
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={() => onClick(name)}>Click Me</button>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;