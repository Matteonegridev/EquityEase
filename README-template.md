# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- SCSS
- Mobile-first workflow
- Typescript
- [React](https://reactjs.org/) - JS library

### What I learned

1. Form validation with React Hook Form:
   this method helped me to write cleaner code and more efficient code thanks to the build in the library offers. There wasn't needed to create a handleChange fuction and states. the {...field} spreads out the values we need.

```js
<Controller
        defaultValue={""}
        control={control}
        name="amount"
        rules={{ required: "Field is required" }}
        render={({ field }) => (
          <MortgageInput
            id="amount"
            {...field}
            text="Morgage Amount"
            error={errors.amount?.message}
          />
        )}
      />
};
```

2. Another important solution to this has been the use of ComponentsProps with Typescript:

```js
type InputProps = ComponentProps<"input"> & {
  text: string;
  error: string | undefined;
};

const MortgageInput = forwardRef<HTMLInputElement, InputProps>(
  ({ text, id, error, ...rest }, ref) => {
    return (
      <>
        <label htmlFor={id} className="form__label">
          {text}
        </label>
        <input
          {...rest}
          className="form__input"
          type="number"
          id={id}
          ref={ref}
        />
        {error && <p className="form--error">{error}</p>}
      </>
    );
  }
);

```

Here we use the spread operator to get the native input values.
Another important key to function this component is the ref we need to pass in.

[The Markdown Guide](https://www.markdownguide.org/)

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

Matteo Negri
