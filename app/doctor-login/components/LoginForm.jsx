'use client'
import React, { useState } from "react";
import InputField from "./InputField";
import PasswordField from "./PasswordInput";
import Checkbox from "./CheckBox";
import SubmitButton from "./Button";
import Text from "./Text";
  
const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    autoLogin: false
  });
  const [errors, setErrors] = useState({
    username: false,
    password: false
  });
  const [touched, setTouched] = useState({
    username: false,
    password: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value
    });
    
    // Clear error when typing
    if (touched[name]) {
      setErrors({
        ...errors,
        [name]: value.trim() === ""
      });
    }
  };

  const handleBlur = (field) => {
    setTouched({
      ...touched,
      [field]: true
    });
    
    // Validate on blur
    if (field === "username") {
      setErrors({
        ...errors,
        username: formValues.username.trim() === ""
      });
    } else if (field === "password") {
      setErrors({
        ...errors,
        password: formValues.password.trim() === ""
      });
    }
  };

  // Validate all form fields
  const validateForm = () => {
    const newErrors = {
      username: formValues.username.trim() === "",
      password: formValues.password.trim() === ""
    };
    
    setErrors(newErrors);
    return !newErrors.username && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched to show validation errors
    setTouched({
      username: true,
      password: true
    });
    
    // Only proceed if validation passes
    if (validateForm()) {
      console.log("Logging in with:", formValues);
      // Add your authentication logic here
    }
  };

  // Check if email format is valid (simple check)
  const isEmailInvalid = () => {
    return touched.username && !errors.username && !formValues.username.includes('@');
  };

  return (
     
                  
        <form onSubmit={handleSubmit} className="pl-1 mt-6">
          {/* Username/Email Field */}
          <InputField
            id="username"
            name="username"
            label="아이디 (이메일)"
            value={formValues.username}
            placeholders={'아이디를 입력해주세요'}
            fonts={'Pretendard Variable'}
            fontWeight={600}
            fontSize='13px'
            colors='#97A8C4'
            onChange={handleChange}
            onBlur={() => handleBlur("username")}
            error={touched.username && (errors.username || isEmailInvalid())}
            errorMessage={errors.username 
              ? "아이디를 입력해주세요" 
              : isEmailInvalid() 
                ? "올바르지 않은 아이디 (이메일) 형식이에요" 
                : ""}
            showValidation={false}
          />

          {/* Password Field */}
          <PasswordField
            id="password"
            name="password"
            label="비밀번호"
            fonts={'Pretendard Variable'}
            fontWeight={600}
            fontSize='13px'
            colors='#97A8C4'
            placeholders='비밀번호를 입력해주세요'
            value={formValues.password}
            onChange={handleChange}
            onBlur={() => handleBlur("password")}
            error={touched.password && errors.password}
            errorMessage="8-16자리 영문/숫자/특수문자 조합만 입력할 수 있어요"
            validationMessage=""
          />

          {/* Auto Login and Forgot Password */}
          <div className="flex items-center mb-[9px]  ">
            <Checkbox
              id="autoLogin"
              name="autoLogin"
              label="자동 로그인"
               fonts={'Pretendard Variable'}
            fontWeight={400}
            fontSize='12px'
            colors='#DADFE9'
               checked={formValues.autoLogin}

              onChange={handleChange}
            />
            <div className="ml-auto">
                    <Text fonts={'Pretendard Variable'} fontWeight='700' TextSize='14px' TextChildrem={'아이디 · 비밀번호 찾기  >'} color='#0054A6' Line_height='40px' paddingLeft='6px' />
 

             </div>
          </div>

          {/* Login Button */}
          <div className="flex items-center flex-col w-[100%] ">
          <SubmitButton bgcolor={`#0054A6`} fieldName='로그인' type='submit' /> 
                              <Text fonts={'Pretendard Variable'} fontWeight={400} lines='underline'  TextSize='14px' TextChildrem='회원가입' color='#343F4E' Line_height='40px' paddingLeft='6px' />
</div>
        </form>
    );
};

export default LoginForm;

