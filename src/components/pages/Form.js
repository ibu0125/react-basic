import React from "react";
import "./Form.css";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form">
      <div className="form-container">
        <h1>お問い合わせ</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
          <label htmlFor="名前">名前</label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "※名前は必須です" })}
          />
          <p className="error-message">{errors.name?.message}</p>
          <label htmlFor="メールアドレス">メールアドレス</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "※メールアドレスは必須です" })}
          />
          <p className="error-message">{errors.email?.message}</p>

          <label htmlFor="パスワード">パスワード</label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "※パスワードは必須です" })}
          />
          <p className="error-message">{errors.password?.message}</p>

          <label htmlFor="textbox">お問い合わせ</label>
          <textarea
            id="message"
            name="message"
            style={{ height: "100px", width: "100%" }}
          />
          <p className="error-message">{errors.textbox?.message}</p>
          <button type="submit">送信</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
