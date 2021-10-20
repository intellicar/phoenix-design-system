import { render } from "@testing-library/react";
import { Chip } from "./Chip";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
describe("chip test", () => {
  test("testing the required props of widget", () => {
    const element = shallow(<Chip />);
  });
});
