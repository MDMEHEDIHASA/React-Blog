import React from "react";

const From = () => {
    
  return (
    <div>
      <div class="ui horizontal divider">or</div>
      <form class="ui form segment">
        <div class="two fields">
          <div class="field">
            <label>Name</label>
            <input placeholder="First Name" name="name" type="text" />
          </div>
          <div class="field">
            <label>Gender</label>
            <select class="ui dropdown" name="gender">
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div class="two fields">
          <div class="field">
            <label>Username</label>
            <input placeholder="Username" name="username" type="text" />
          </div>
          <div class="field">
            <label>Password</label>
            <input type="password" name="password" />
          </div>
        </div>
        <div class="field">
          <label>Skills</label>
          <select name="skills" multiple="" class="ui dropdown">
            <option value="">Select Skills</option>
            <option value="css">CSS</option>
            <option value="html">HTML</option>
            <option value="javascript">Javascript</option>
            <option value="design">Graphic Design</option>
            <option value="plumbing">Plumbing</option>
            <option value="mech">Mechanical Engineering</option>
            <option value="repair">Kitchen Repair</option>
          </select>
        </div>
        <div class="inline field">
          <div class="ui checkbox">
            <input type="checkbox" name="terms" />
            <label>I agree to the terms and conditions</label>
          </div>
        </div>
        <div class="ui primary submit button">Submit</div>
        <div class="ui error message"></div>
      </form>
    </div>
  );
};

export default From;
