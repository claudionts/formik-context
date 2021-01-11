import React from 'react';
import { Formik, FormikHelpers, Form, Field, useFormikContext, FormikContextType } from 'formik';

interface IForm {
  name: string;
};

//Componente criado apenas para demostrar o uso do Formik Context
const Emmiter = () => {
  //Com a função `useFormikContext()` você acessa o estado atual do Formik
  const formik: FormikContextType<IForm> = useFormikContext();
  return (
    <div>({formik.getFieldMeta('name').value})</div>
  );
};

const App = () => {
  //Função que será executada ao clicar no Submit Button
  //Ela recebe como parâmetro os valores dos campos do formulário
  //E uma instância do Formik que permite você executar ações do seu formulário
  const onHandler = (values: IForm, formikHelpers: FormikHelpers<IForm>) => {
    console.log(values, formikHelpers);
  };
 
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={onHandler}
    >
      <Form>
        <div>
          <div>
            <Field name="name" />
            <button type="submit">Submit</button>
          </div>
          {/* Chamada do Componente criado acima */}
          <Emmiter />
        </div>
      </Form>
    </Formik>
  )
};

export default App;
