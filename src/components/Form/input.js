import classNames from "classnames";
import { useField } from "formik";

const Input = ({
  label,
  className,
  inputClass,
  labelClass,
  id,
  innerRef,
  ...props
}) => {
  const [field, meta] = useField(props);
  id = id ? id : props.name;
  return (
    <div className={classNames(className, "mb-6")}>
      {label && (
        <label
          className={classNames(
            labelClass,
            "text-black-three block mb-2 text-sm font-normal"
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        className={classNames(
          { "error-input": meta.touched && meta.error },
          inputClass,
          "w-full border border-pinkish-grey text-black-three rounded-2xl text-sm sm:text-base sm:p-4"
        )}
        {...field}
        {...props}
        ref={innerRef}
        id={id}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-rusty-red font-normal pt-1">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default Input;
