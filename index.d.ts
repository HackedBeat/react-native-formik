declare module 'react-native-formik' {
  import React from 'react';
  import { StyleProp, ViewStyle, EasingFunction } from 'react-native';

  export interface makeReactNativeFieldProps {
    name: string;
  }

  export interface setFormikInitialValueProps {
    name: string;
  }

  export interface withInputTypePropsProps {
    type: string;
    autoCorrect?: boolean;
    keyboardType?: string;
    autoCapitalize?: string;
  }

  export interface withErrorProps {
    error?: string;
  }

  export interface withTouchedProps {
    touched?: boolean;
  }

  export interface withFocusProps {
    focused?: boolean;
    onBlur?: () => void;
    onFocus?: () => void;
  }

  export interface withFormikControlProps<T = string> extends withErrorProps {
    name: string;
    value?: T;
    setFieldValue?(value: T): void;
    setFieldTouched?(value?: T): void;
  }

  export interface KeyboardModalProps {
    style?: StyleProp<ViewStyle>;
    easingAnimation?: EasingFunction;
    children: React.ReactNode;
  }

  export interface handleTextInputProps extends withFormikControlProps, withInputTypePropsProps {
    onChangeText?: (text: string) => void;
    onBlur?: () => void;
  }

  export interface withNextInputAutoFocusInputProps {
    returnKeyType?: string;
    onSubmitEditing?: () => void;
  }

  export type makeInputGreatAgainProps = makeReactNativeFieldProps &
    setFormikInitialValueProps &
    withInputTypePropsProps &
    withErrorProps &
    withTouchedProps;

  export function makeReactNativeField<Props>(
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentClass<Props & makeReactNativeFieldProps>;

  export function setFormikInitialValue<Props>(
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentClass<Props & setFormikInitialValueProps>;

  export function withError<Props>(
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentClass<Props & withErrorProps>;

  export function withErrorIfNeeded<Props>(
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentClass<Props & withErrorProps>;

  export function withInputTypeProps<Props>(
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentClass<Props & withInputTypePropsProps>;

  export function withFormik<Props>(
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentClass<Props>;

  export function withNextInputAutoFocusInput<Props>(
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentClass<Props & withNextInputAutoFocusInputProps>;

  export function withNextInputAutoFocusForm<Props>(
    WrappedComponent: React.ComponentType<Props>,
    options?: {
      submitAfterLastInput: Boolean
    }
  ): React.ComponentClass<Props>;

  export function withPickerValues<Props>(
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentClass<Props>;

  export function withTouched<Props>(
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentClass<Props & withTouchedProps>;

  export function withFocus<Props>(
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentClass<Props & withFocusProps>;

  export function makeInputsGreatAgain<Props>(
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentClass<Props & makeInputGreatAgainProps>;

  export function withFormikControl<Props>(
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentClass<Props & withFormikControlProps>;

  export function handleTextInput<Props>(
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentClass<Props & handleTextInputProps>;

  export const KeyboardModal: React.ComponentType<KeyboardModalProps>;
  export default makeInputsGreatAgain;
}
