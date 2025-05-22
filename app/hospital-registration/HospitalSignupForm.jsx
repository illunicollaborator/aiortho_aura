'use client'
import React, { useState } from "react";
import InputField from "../doctor-login/components/InputField";
import SubmitButton from "../doctor-login/components/Button";
import Text from "../doctor-login/components/Text";

const SignupForm = () => {
  const [formValues, setFormValues] = useState({
    phoneNumber: "",
    email: "",
    hospitalName: "",
    hospitalAddress: "",
    hospitalPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Check if any field is filled
  const hasFilledFields = Object.values(formValues).some(value => value.trim() !== "");
  
  // Determine button color based on whether fields are filled
  const buttonColor = hasFilledFields ? "#0054A6" : "#BDD5FF"; // Red if filled, original blue if empty

  return (
    <form onSubmit={handleSubmit} className="pl-1 mt-6 ">
      {/* Phone Number Field */}
      <InputField
        id="phoneNumber"
        name="phoneNumber"
        label="휴대폰 번호"
        value={formValues.phoneNumber}
        placeholders={'휴대폰 번호을 입력해주세요'}
        fonts={'Pretendard Variable'}
        fontWeight={600}
        fontSize='13px'
        colors='#8395AC'
        onChange={handleChange}
      />
      
      {/* Email Field */}
      <InputField
        id="email"
        name="email"
        label="이메일"
        value={formValues.email}
        placeholders={'이메일을 입력해주세요'}
        fonts='Pretendard Variable'
        fontWeight={600}
        fontSize='13px'
        colors='#8395AC'
        onChange={handleChange}
      />
      
      {/* Hospital Name Field */}
      <InputField
        id="hospitalName"
        name="hospitalName"
        label="병원명"
        value={formValues.hospitalName}
        placeholders={'병원명을 입력해주세요'}
        fonts={'Pretendard Variable'}
        fontWeight={600}
        fontSize='13px'
        colors='#8395AC'
        onChange={handleChange}
      />
      
      {/* Hospital Address Field */}
      <InputField
        id="hospitalAddress"
        name="hospitalAddress"
        label="병원 주소"
        value={formValues.hospitalAddress}
        placeholders={'병원 주소를 입력해주세요'}
        fonts={'Pretendard Variable'}
        fontWeight={600}
        fontSize='13px'
        colors='#8395AC'
        onChange={handleChange}
      />
      
      {/* Hospital Phone Field */}
      <InputField
        id="hospitalPhone"
        name="hospitalPhone"
        label="병원 대표전화"
        value={formValues.hospitalPhone}
        placeholders={'병원 대표전화 번호를 입력해주세요'}
        fonts={'Pretendard Variable'}
        fontWeight={600}
        fontSize='13px'
        colors='#8395AC'
        onChange={handleChange}
      />

      {/* Submit Button with conditional color */}
      <SubmitButton 
        bgcolor={buttonColor} 
        fieldName='등록 신청' 
        type='submit' 
      />
    </form>
  );
};

export default SignupForm;