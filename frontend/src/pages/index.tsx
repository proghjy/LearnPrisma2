import * as React from 'react';
import { NextPage } from 'next';

import TodoForm from '../components/todo_from';
import TodoList from '../components/todo_list';
import { TodosContextProvider } from '../context/todos_context';

const IndexPage: NextPage = () => {
  return (
    <TodosContextProvider>
      <TodoForm />
      <TodoList />
    </TodosContextProvider>
    
  );
};

// IndexPage.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
//   return { userAgent };
// };

export default IndexPage;