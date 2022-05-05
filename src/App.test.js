import Enzyme,{shallow} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import App from './App'

Enzyme.configure({ adapter: new Adapter() });

test("checking h1 content",()=>{
  const wrapper = shallow(<App />);
  expect(wrapper.find('h2').text()).toContain('Hello World!');
})

test("checking h2 content",()=>{
  const wrapper = shallow(<App />);
  expect(wrapper.find('p').text()).toContain('This is para testing');
})

test("testing props",()=>{
  const wrapper = shallow(<App coursename="react"  />)
  expect(wrapper.find('#testid').text()).toBe('welcome react')
})


test("checking state initial value",()=>{
  const wrapper = shallow(<App coursename="react"  />)
  expect(wrapper.find('#initial_value').text()).toBe('0')
})

test("checking onclick",()=>{
  const wrapper = shallow(<App />);
  wrapper.find('button').simulate('click');
  expect(wrapper.find('#initial_value').text()).toBe('1');
})