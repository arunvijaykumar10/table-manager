import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Nutritions from "./Multiple";
import "./Table.css";

type NutritionItem = {
  id: number;
  label: string;
  value: string;
};

type FormData = {
  name: string;
  description: string;
  link: string;
  maxIntake: string;
  nutritions: string;
  shouldCook: string;
};

type FormProps = {
  addRow: (row: FormData) => void;
};

const items: NutritionItem[] = [
  { id: 1, label: "Vitamin A", value: "Vitamin A" },
  { id: 2, label: "Vitamin B", value: "Vitamin B" },
  { id: 3, label: "Vitamin C", value: "Vitamin C" },
  { id: 4, label: "Vitamin D", value: "Vitamin D" },
  { id: 5, label: "Vitamin E", value: "Vitamin E" },
];

function Form({ addRow }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      description: "",
      link: "",
      maxIntake: "",
      nutritions: "",
      shouldCook: "",
    },
  });

  const handleNutritionsChange = (selectedNutritions: string) => {
    setValue("nutritions", selectedNutritions);
    clearErrors("nutritions");
  };

  const handleShouldCookChange = (value: string) => {
    setValue("shouldCook", value);
    clearErrors("shouldCook");
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    let valid = true;

    if (!data.shouldCook) {
      setError("shouldCook", {
        type: "manual",
        message: "Should Cook is required",
      });
      valid = false;
    }

    if (!data.nutritions) {
      setError("nutritions", {
        type: "manual",
        message: "Nutritions are required",
      });
      valid = false;
    }

    if (!valid) {
      return;
    }

    addRow(data);
    Object.keys(data).forEach((field) => setValue(field as keyof FormData, ""));
  };

  return (
    <div className="Addform">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="input name"
          />
          {errors.name && <p className="paragraph">*{errors.name.message}</p>}
        </div>

        <div>
          <input
            placeholder="Description"
            {...register("description", {
              required: "Description is required",
            })}
            className="input description"
          />
          {errors.description && (
            <p className="paragraph">*{errors.description.message}</p>
          )}
        </div>

        <div>
          <input
            placeholder="Link"
            {...register("link", { required: "Link is required" })}
            className="input link"
          />
          {errors.link && <p className="paragraph">*{errors.link.message}</p>}
        </div>

        <div>
          <label>
            <input
              type="radio"
              value="Yes"
              {...register("shouldCook", { required: "Should Cook is required" })}
              onChange={() => handleShouldCookChange("Yes")}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="No"
              {...register("shouldCook", { required: "Should Cook is required" })}
              onChange={() => handleShouldCookChange("No")}
            />
            No
          </label>
        </div>
        {errors.shouldCook && <p className="paragraph">*{errors.shouldCook.message}</p>}

        <div>
          <Nutritions
            items={items}
            onSelect={handleNutritionsChange}
            errorMessage={errors.nutritions?.message ||""}
          />
        </div>

        <div>
          <input
            placeholder="Max Intake per day" 
            {...register("maxIntake", { required: "Intake is required" })}
            className="input maxIntake"
          />
          {errors.maxIntake && (
            <p className="paragraph">*{errors.maxIntake.message}</p>
          )}
        </div>
        <div>
          <button type="submit" className="btn submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
