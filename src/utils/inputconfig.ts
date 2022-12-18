import { String } from './string';

const InputConfig = {
  LoginInput: [
    {
      Title: String.Email,
      AccessibilityLabel: 'Username',
      PlaceHolder: String.Email_PlaceHolder,
      KeyboardType: 'default',
      ReturnKeyType: 'next',
      AutoCapitalize: 'none', // words
    },
    {
      Title: String.Password,
      AccessibilityLabel: 'Password',
      PlaceHolder: String.Password_PlaceHolder,
      SecureTextEntry: true,
      KeyboardType: 'default',
      ReturnKeyType: 'done',
      AutoCapitalize: 'none',
    },
  ],
  ForgotPasswordInput: [
    {
      AccessibilityLabel: 'EmailId',
      Title: String.Email,
      PlaceHolder: String.Email_PlaceHolder,
      KeyboardType: 'email-address',
      ReturnKeyType: 'done',
      AutoCapitalize: 'none', // words
    },
  ],
  SignUpInput: [
    {
      AccessibilityLabel: 'FirstName',
      Title: String.Name,
      PlaceHolder: String.Name_PlaceHolder,
      KeyboardType: 'default',
      ReturnKeyType: 'next',
      AutoCapitalize: 'words', // words
    },
    {
      AccessibilityLabel: 'Phonenumber',
      Title: String.Phone_Number,
      ReturnKeyType: 'next',
      Length: 15,
      PlaceHolder: String.Phone_Number_PlaceHolder,
      KeyboardType: 'phone-pad',
      AutoCapitalize: 'none',
    },
    {
      AccessibilityLabel: 'EmailAddress',
      Title: String.Email,
      PlaceHolder: String.Email_PlaceHolder,
      KeyboardType: 'email-address',
      ReturnKeyType: 'next',
      AutoCapitalize: 'none', // words
    },
    {
      AccessibilityLabel: 'UserPassword',
      Title: String.Password,
      PlaceHolder: String.Password_PlaceHolder,
      SecureTextEntry: true,
      KeyboardType: 'default',
      ReturnKeyType: 'next',
      AutoCapitalize: 'none',
    },
    {
      AccessibilityLabel: 'Referral',
      Title: String.Referral_Code_Title,
      PlaceHolder: String.Referral_Code,
      KeyboardType: 'default',
      ReturnKeyType: 'done',
      AutoCapitalize: 'none',
    },
  ],
  EditProfileInput: [
    {
      Title: String.Name,
      PlaceHolder: String.Name_PlaceHolder,
      KeyboardType: 'default',
      ReturnKeyType: 'next',
      AutoCapitalize: 'words', // words
      editable: true,
    },
    {
      Title: String.Phone_Number,
      ReturnKeyType: 'done',
      Length: 10,
      PlaceHolder: String.Phone_Number_PlaceHolder,
      KeyboardType: 'phone-pad',
      AutoCapitalize: 'none',
      editable: true,
    },
    {
      Title: String.Email,
      PlaceHolder: String.Email_PlaceHolder,
      KeyboardType: 'email-address',
      ReturnKeyType: 'next',
      AutoCapitalize: 'none', // words
      editable: false,
    },
  ],
  ContactUs: [
    {
      Title: String.Name,
      AccessibilityLabel: 'Full Name',
      PlaceHolder: String.Name,
      KeyboardType: 'default',
      ReturnKeyType: 'next',
      AutoCapitalize: 'none',
    },
    {
      Title: String.Email,
      AccessibilityLabel: 'Username',
      PlaceHolder: String.Email_PlaceHolder,
      KeyboardType: 'default',
      ReturnKeyType: 'next',
      AutoCapitalize: 'none',
    },
    {
      Title: String.Description,
      AccessibilityLabel: 'Description',
      PlaceHolder: String.Description,
      KeyboardType: 'default',
      ReturnKeyType: 'done',
      AutoCapitalize: 'none',
    },
  ],
  CheckoutInstructionInput: [
    {
      Title: String.Order_Instruction,
      AccessibilityLabel: 'Order Instruction',
      PlaceHolder: String.Order_Instruction_Placeholder,
      KeyboardType: 'default',
      ReturnKeyType: 'next',
      AutoCapitalize: 'none',
    },
    {
      Title: String.Delivery_Instruction,
      AccessibilityLabel: 'Delivery Instruction',
      PlaceHolder: String.Delivery_Instruction_Placeholder,
      KeyboardType: 'default',
      ReturnKeyType: 'done',
      AutoCapitalize: 'none',
    },
  ],
};
export default InputConfig;
