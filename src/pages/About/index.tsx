// pages/About/index.tsx
import useCounterStore from "~/stores/counter";

const About = () => {
    const counter = useCounterStore((state) => state.counter);

    return <div>About Page {counter}</div>;
};

export default About;
