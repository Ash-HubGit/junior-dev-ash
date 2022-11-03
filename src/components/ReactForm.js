import * as React from "react";
import { useForm } from "react-hook-form";
import "../App.css";

// export default function ReactForm() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" {...register("email")} placeholder="email" />
//       <input type="password" {...register("password")} placeholder="password" />
//       <select {...register("gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//   );
// }

const ReactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="email"
        placeholder="email..."
        {...register("email")}
      />
      <input
        type="password"
        name="password"
        placeholder="password..."
        {...register("password")}
      />
      <input
        type="text"
        name="title"
        placeholder="title..."
        {...register("title")}
      />
      <input
        type="text"
        name="location"
        placeholder="location..."
        {...register("location")}
      />
      <input type="submit" />
    </form>
  );
};

export default ReactForm;
