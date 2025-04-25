
// import React, { useState } from 'react';
// import { Input } from "../components/ui/input";
// import { Label } from "../components/ui/label";
// import { Button } from "../components/ui/button";
// import { Textarea } from "../components/ui/textarea";
// import { Alert, AlertDescription } from "../components/ui/alert";
// import { AlertTriangle } from "lucide-react";
// // import { useLogs } from '../../context/LogsContex';
// import { useLogs } from '../context/LogsContext';

// interface ValidationRules {
//   required?: boolean;
//   minLength?: number;
//   maxLength?: number;
//   pattern?: RegExp;
//   email?: boolean;
//   password?: boolean;
//   match?: string;
// }

// interface FormField {
//   name: string;
//   label: string;
//   type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'tel';
//   placeholder?: string;
//   validation?: ValidationRules;
//   defaultValue?: string;
// }

// interface FormValidatorProps {
//   fields: FormField[];
//   onSubmit: (data: Record<string, string>) => void;
//   submitText?: string;
// }

// const FormValidator: React.FC<FormValidatorProps> = ({ 
//   fields, 
//   onSubmit,
//   submitText = "Submit" 
// }) => {
//   const [formValues, setFormValues] = useState<Record<string, string>>(() => {
//     const initialValues: Record<string, string> = {};
//     fields.forEach(field => {
//       initialValues[field.name] = field.defaultValue || '';
//     });
//     return initialValues;
//   });
  
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const { addLog } = useLogs();
  
//   const validateField = (field: FormField, value: string, allValues: Record<string, string>) => {
//     if (!field.validation) return '';
    
//     const { 
//       required, 
//       minLength, 
//       maxLength, 
//       pattern, 
//       email, 
//       password,
//       match 
//     } = field.validation;
    
//     // Required field
//     if (required && !value) {
//       return `${field.label} is required`;
//     }
    
//     // Min length
//     if (minLength && value.length < minLength) {
//       return `${field.label} must be at least ${minLength} characters`;
//     }
    
//     // Max length
//     if (maxLength && value.length > maxLength) {
//       return `${field.label} must be less than ${maxLength} characters`;
//     }
    
//     // Pattern match
//     if (pattern && !pattern.test(value)) {
//       return `${field.label} has an invalid format`;
//     }
    
//     // Email validation
//     if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
//       return `Please enter a valid email address`;
//     }
    
//     // Password validation
//     if (password && value) {
//       const passwordErrors = [];
      
//       if (!/(?=.*[A-Z])/.test(value)) {
//         passwordErrors.push('at least one uppercase letter');
//       }
      
//       if (!/(?=.*[a-z])/.test(value)) {
//         passwordErrors.push('at least one lowercase letter');
//       }
      
//       if (!/(?=.*\d)/.test(value)) {
//         passwordErrors.push('at least one number');
//       }
      
//       if (!/(?=.*[!@#$%^&*])/.test(value)) {
//         passwordErrors.push('at least one special character');
//       }
      
//       if (passwordErrors.length > 0) {
//         return `Password must contain ${passwordErrors.join(', ')}`;
//       }
//     }
    
//     // Field match (usually for password confirmation)
//     if (match && value !== allValues[match]) {
//       return `${field.label} does not match`;
//     }
    
//     return '';
//   };
  
//   const handleChange = (name: string, value: string) => {
//     setFormValues(prev => ({ ...prev, [name]: value }));
    
//     // Clear error when typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };
  
//   const handleBlur = (field: FormField) => {
//     const error = validateField(field, formValues[field.name], formValues);
    
//     setErrors(prev => ({
//       ...prev,
//       [field.name]: error
//     }));
//   };
  
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Validate all fields
//     const newErrors: Record<string, string> = {};
//     let hasErrors = false;
    
//     fields.forEach(field => {
//       const error = validateField(field, formValues[field.name], formValues);
//       if (error) {
//         newErrors[field.name] = error;
//         hasErrors = true;
//       }
//     });
    
//     setErrors(newErrors);
    
//     if (!hasErrors) {
//       addLog('user_interaction', 'Form submitted successfully', { formValues });
//       onSubmit(formValues);
//     } else {
//       addLog('user_interaction', 'Form submission failed validation', { errors: newErrors });
//     }
//   };
  
//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       {fields.map((field) => (
//         <div key={field.name} className="space-y-2">
//           <Label htmlFor={field.name}>{field.label}</Label>
          
//           {field.type === 'textarea' ? (
//             <Textarea
//               id={field.name}
//               placeholder={field.placeholder}
//               value={formValues[field.name]}
//               onChange={(e) => handleChange(field.name, e.target.value)}
//               onBlur={() => handleBlur(field)}
//               className={errors[field.name] ? 'border-destructive' : ''}
//             />
//           ) : (
//             <Input
//               id={field.name}
//               type={field.type}
//               placeholder={field.placeholder}
//               value={formValues[field.name]}
//               onChange={(e) => handleChange(field.name, e.target.value)}
//               onBlur={() => handleBlur(field)}
//               className={errors[field.name] ? 'border-destructive' : ''}
//             />
//           )}
          
//           {errors[field.name] && (
//             <Alert variant="destructive" className="py-2 px-3 text-sm">
//               <AlertDescription className="flex items-center gap-2">
//                 <AlertTriangle className="h-4 w-4" />
//                 {errors[field.name]}
//               </AlertDescription>
//             </Alert>
//           )}
//         </div>
//       ))}
      
//       <Button type="submit" className="w-full">
//         {submitText}
//       </Button>
//     </form>
//   );
// };

// export default FormValidator;





import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription } from "./ui/alert";
import { AlertTriangle } from "lucide-react";
import { useLogs } from "../context/LogsContext";

const FormValidator = ({ fields, onSubmit, submitText = "Submit" }) => {
  const [formValues, setFormValues] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || "";
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState({});
  const { addLog } = useLogs();

  const validateField = (field, value, allValues) => {
    if (!field.validation) return "";
    const { required, minLength, maxLength, pattern, email, password, match } = field.validation;

    if (required && !value) return `${field.label} is required`;
    if (minLength && value.length < minLength) return `${field.label} must be at least ${minLength} characters`;
    if (maxLength && value.length > maxLength) return `${field.label} must be less than ${maxLength} characters`;
    if (pattern && !pattern.test(value)) return `${field.label} has an invalid format`;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return `Please enter a valid email address`;

    if (password) {
      const passwordErrors = [];
      if (!/(?=.*[A-Z])/.test(value)) passwordErrors.push("one uppercase letter");
      if (!/(?=.*[a-z])/.test(value)) passwordErrors.push("one lowercase letter");
      if (!/(?=.*\d)/.test(value)) passwordErrors.push("one number");
      if (!/(?=.*[!@#$%^&*])/.test(value)) passwordErrors.push("one special character");
      if (passwordErrors.length > 0) return `Password must contain ${passwordErrors.join(", ")}`;
    }

    if (match && value !== allValues[match]) return `${field.label} does not match`;
    return "";
  };

  const handleChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (field) => {
    const error = validateField(field, formValues[field.name], formValues);
    setErrors((prev) => ({ ...prev, [field.name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    let hasErrors = false;

    fields.forEach((field) => {
      const error = validateField(field, formValues[field.name], formValues);
      if (error) {
        newErrors[field.name] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    if (!hasErrors) {
      addLog("user_interaction", "Form submitted successfully", { formValues });
      onSubmit(formValues);
    } else {
      addLog("user_interaction", "Form submission failed validation", { errors: newErrors });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          {field.type === "textarea" ? (
            <Textarea
              id={field.name}
              placeholder={field.placeholder}
              value={formValues[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              onBlur={() => handleBlur(field)}
              className={errors[field.name] ? "border-destructive" : ""}
            />
          ) : (
            <Input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formValues[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              onBlur={() => handleBlur(field)}
              className={errors[field.name] ? "border-destructive" : ""}
            />
          )}

          {errors[field.name] && (
            <Alert variant="destructive" className="py-2 px-3 text-sm">
              <AlertDescription className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                {errors[field.name]}
              </AlertDescription>
            </Alert>
          )}
        </div>
      ))}

      <Button type="submit" className="w-full">
        {submitText}
      </Button>
    </form>
  );
};

export default FormValidator;
