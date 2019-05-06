import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class STS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: STS.Types.ClientConfiguration)
  config: Config & STS.Types.ClientConfiguration;
  /**
   * Returns a set of temporary security credentials that you can use to access AWS resources that you might not normally have access to. These temporary credentials consist of an access key ID, a secret access key, and a security token. Typically, you use AssumeRole for cross-account access or federation. For a comparison of AssumeRole with other API operations that produce temporary credentials, see Requesting Temporary Security Credentials and Comparing the AWS STS API operations in the IAM User Guide.  You cannot use AWS account root user credentials to call AssumeRole. You must use credentials for an IAM user or an IAM role to call AssumeRole.  For cross-account access, imagine that you own multiple accounts and need to access resources in each account. You could create long-term credentials in each account to access those resources. However, managing all those credentials and remembering which one can access which account can be time consuming. Instead, you can create one set of long-term credentials in one account and then use temporary security credentials to access all the other accounts by assuming roles in those accounts. For more information about roles, see IAM Roles (Delegation and Federation) in the IAM User Guide.  For federation, you can, for example, grant single sign-on access to the AWS Management Console. If you already have an identity and authentication system in your network, you don't have to recreate identities in AWS in order to grant them access to AWS. Instead, after a user has been authenticated, you call AssumeRole (and specify the role with the appropriate permissions) to get temporary security credentials for that user. With those temporary security credentials, you construct a sign-in URL from which users can access the console. For more information, see Common Scenarios for Temporary Credentials in the IAM User Guide. By default, the temporary security credentials created by AssumeRole last for one hour. However, you can use the optional DurationSeconds parameter to specify the duration of your session. You can provide a value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see View the Maximum Session Duration Setting for a Role in the IAM User Guide. The maximum session duration limit applies when you use the AssumeRole* API operations or the assume-role* CLI commands. However the limit does not apply when you use those operations to create a console URL. For more information, see Using IAM Roles in the IAM User Guide. The temporary security credentials created by AssumeRole can be used to make API calls to any AWS service with the following exception: You cannot call the AWS STS service's GetFederationToken or GetSessionToken API operations. (Optional) You can pass an IAM permissions policy to this operation. If you pass a policy to this operation, the resulting temporary credentials have the permissions of the assumed role and the policy that you pass. This gives you a way to further restrict the permissions for the resulting temporary security credentials. You cannot use the passed policy to grant permissions that are in excess of those allowed by the permissions policy of the role that is being assumed. For more information, see  Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity  in the IAM User Guide. To assume a role, your AWS account must be trusted by the role. The trust relationship is defined in the role's trust policy when the role is created. That trust policy states which accounts are allowed to delegate access to this account's role.  The user who wants to access the role must also have permissions delegated from the role's administrator. If the user and the role are in a different account, then the user's administrator must attach a policy. That attached policy must allow the user to call AssumeRole for the ARN of the role in the other account. If the user is in the same account as the role, then you can do either of the following:   Attach a policy to the user (identical to the previous user in a different account)   Add the user as a principal directly in the role's trust policy.   In this case, the trust policy acts as the only resource-based policy in IAM. Users in the same account as the role do not need explicit permission to assume the role. For more information about trust policies and resource-based policies, see IAM Policies in the IAM User Guide.  Using MFA with AssumeRole  (Optional) You can include multi-factor authentication (MFA) information when you call AssumeRole. This is useful for cross-account scenarios in which you want to make sure that the user who is assuming the role has been authenticated using an AWS MFA device. In that scenario, the trust policy of the role being assumed includes a condition that tests for MFA authentication. If the caller does not include valid MFA information, the request to assume the role is denied. The condition in a trust policy that tests for MFA authentication might look like the following example.  "Condition": {"Bool": {"aws:MultiFactorAuthPresent": true}}  For more information, see Configuring MFA-Protected API Access in the IAM User Guide guide. To use MFA with AssumeRole, you pass values for the SerialNumber and TokenCode parameters. The SerialNumber value identifies the user's hardware or virtual MFA device. The TokenCode is the time-based one-time password (TOTP) that the MFA device produces. 
   */
  assumeRole(params: STS.Types.AssumeRoleRequest, callback?: (err: AWSError, data: STS.Types.AssumeRoleResponse) => void): Request<STS.Types.AssumeRoleResponse, AWSError>;
  /**
   * Returns a set of temporary security credentials that you can use to access AWS resources that you might not normally have access to. These temporary credentials consist of an access key ID, a secret access key, and a security token. Typically, you use AssumeRole for cross-account access or federation. For a comparison of AssumeRole with other API operations that produce temporary credentials, see Requesting Temporary Security Credentials and Comparing the AWS STS API operations in the IAM User Guide.  You cannot use AWS account root user credentials to call AssumeRole. You must use credentials for an IAM user or an IAM role to call AssumeRole.  For cross-account access, imagine that you own multiple accounts and need to access resources in each account. You could create long-term credentials in each account to access those resources. However, managing all those credentials and remembering which one can access which account can be time consuming. Instead, you can create one set of long-term credentials in one account and then use temporary security credentials to access all the other accounts by assuming roles in those accounts. For more information about roles, see IAM Roles (Delegation and Federation) in the IAM User Guide.  For federation, you can, for example, grant single sign-on access to the AWS Management Console. If you already have an identity and authentication system in your network, you don't have to recreate identities in AWS in order to grant them access to AWS. Instead, after a user has been authenticated, you call AssumeRole (and specify the role with the appropriate permissions) to get temporary security credentials for that user. With those temporary security credentials, you construct a sign-in URL from which users can access the console. For more information, see Common Scenarios for Temporary Credentials in the IAM User Guide. By default, the temporary security credentials created by AssumeRole last for one hour. However, you can use the optional DurationSeconds parameter to specify the duration of your session. You can provide a value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see View the Maximum Session Duration Setting for a Role in the IAM User Guide. The maximum session duration limit applies when you use the AssumeRole* API operations or the assume-role* CLI commands. However the limit does not apply when you use those operations to create a console URL. For more information, see Using IAM Roles in the IAM User Guide. The temporary security credentials created by AssumeRole can be used to make API calls to any AWS service with the following exception: You cannot call the AWS STS service's GetFederationToken or GetSessionToken API operations. (Optional) You can pass an IAM permissions policy to this operation. If you pass a policy to this operation, the resulting temporary credentials have the permissions of the assumed role and the policy that you pass. This gives you a way to further restrict the permissions for the resulting temporary security credentials. You cannot use the passed policy to grant permissions that are in excess of those allowed by the permissions policy of the role that is being assumed. For more information, see  Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity  in the IAM User Guide. To assume a role, your AWS account must be trusted by the role. The trust relationship is defined in the role's trust policy when the role is created. That trust policy states which accounts are allowed to delegate access to this account's role.  The user who wants to access the role must also have permissions delegated from the role's administrator. If the user and the role are in a different account, then the user's administrator must attach a policy. That attached policy must allow the user to call AssumeRole for the ARN of the role in the other account. If the user is in the same account as the role, then you can do either of the following:   Attach a policy to the user (identical to the previous user in a different account)   Add the user as a principal directly in the role's trust policy.   In this case, the trust policy acts as the only resource-based policy in IAM. Users in the same account as the role do not need explicit permission to assume the role. For more information about trust policies and resource-based policies, see IAM Policies in the IAM User Guide.  Using MFA with AssumeRole  (Optional) You can include multi-factor authentication (MFA) information when you call AssumeRole. This is useful for cross-account scenarios in which you want to make sure that the user who is assuming the role has been authenticated using an AWS MFA device. In that scenario, the trust policy of the role being assumed includes a condition that tests for MFA authentication. If the caller does not include valid MFA information, the request to assume the role is denied. The condition in a trust policy that tests for MFA authentication might look like the following example.  "Condition": {"Bool": {"aws:MultiFactorAuthPresent": true}}  For more information, see Configuring MFA-Protected API Access in the IAM User Guide guide. To use MFA with AssumeRole, you pass values for the SerialNumber and TokenCode parameters. The SerialNumber value identifies the user's hardware or virtual MFA device. The TokenCode is the time-based one-time password (TOTP) that the MFA device produces. 
   */
  assumeRole(callback?: (err: AWSError, data: STS.Types.AssumeRoleResponse) => void): Request<STS.Types.AssumeRoleResponse, AWSError>;
  /**
   * Returns a set of temporary security credentials for users who have been authenticated via a SAML authentication response. This operation provides a mechanism for tying an enterprise identity store or directory to role-based AWS access without user-specific credentials or configuration. For a comparison of AssumeRoleWithSAML with the other API operations that produce temporary credentials, see Requesting Temporary Security Credentials and Comparing the AWS STS API operations in the IAM User Guide. The temporary security credentials returned by this operation consist of an access key ID, a secret access key, and a security token. Applications can use these temporary security credentials to sign calls to AWS services. By default, the temporary security credentials created by AssumeRoleWithSAML last for one hour. However, you can use the optional DurationSeconds parameter to specify the duration of your session. Your role session lasts for the duration that you specify, or until the time specified in the SAML authentication response's SessionNotOnOrAfter value, whichever is shorter. You can provide a DurationSeconds value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see View the Maximum Session Duration Setting for a Role in the IAM User Guide. The maximum session duration limit applies when you use the AssumeRole* API operations or the assume-role* CLI commands. However the limit does not apply when you use those operations to create a console URL. For more information, see Using IAM Roles in the IAM User Guide. The temporary security credentials created by AssumeRoleWithSAML can be used to make API calls to any AWS service with the following exception: you cannot call the STS service's GetFederationToken or GetSessionToken API operations. Optionally, you can pass an IAM permissions policy to this operation. If you pass a policy to this operation, the resulting temporary credentials have the permissions of the assumed role and the policy that you pass. This gives you a way to further restrict the permissions for the resulting temporary security credentials. You cannot use the passed policy to grant permissions that are in excess of those allowed by the permissions policy of the role that is being assumed. For more information, see  Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity  in the IAM User Guide. Before your application can call AssumeRoleWithSAML, you must configure your SAML identity provider (IdP) to issue the claims required by AWS. Additionally, you must use AWS Identity and Access Management (IAM) to create a SAML provider entity in your AWS account that represents your identity provider. You must also create an IAM role that specifies this SAML provider in its trust policy.  Calling AssumeRoleWithSAML does not require the use of AWS security credentials. The identity of the caller is validated by using keys in the metadata document that is uploaded for the SAML provider entity for your identity provider.   Calling AssumeRoleWithSAML can result in an entry in your AWS CloudTrail logs. The entry includes the value in the NameID element of the SAML assertion. We recommend that you use a NameIDType that is not associated with any personally identifiable information (PII). For example, you could instead use the Persistent Identifier (urn:oasis:names:tc:SAML:2.0:nameid-format:persistent).  For more information, see the following resources:    About SAML 2.0-based Federation in the IAM User Guide.     Creating SAML Identity Providers in the IAM User Guide.     Configuring a Relying Party and Claims in the IAM User Guide.     Creating a Role for SAML 2.0 Federation in the IAM User Guide.   
   */
  assumeRoleWithSAML(params: STS.Types.AssumeRoleWithSAMLRequest, callback?: (err: AWSError, data: STS.Types.AssumeRoleWithSAMLResponse) => void): Request<STS.Types.AssumeRoleWithSAMLResponse, AWSError>;
  /**
   * Returns a set of temporary security credentials for users who have been authenticated via a SAML authentication response. This operation provides a mechanism for tying an enterprise identity store or directory to role-based AWS access without user-specific credentials or configuration. For a comparison of AssumeRoleWithSAML with the other API operations that produce temporary credentials, see Requesting Temporary Security Credentials and Comparing the AWS STS API operations in the IAM User Guide. The temporary security credentials returned by this operation consist of an access key ID, a secret access key, and a security token. Applications can use these temporary security credentials to sign calls to AWS services. By default, the temporary security credentials created by AssumeRoleWithSAML last for one hour. However, you can use the optional DurationSeconds parameter to specify the duration of your session. Your role session lasts for the duration that you specify, or until the time specified in the SAML authentication response's SessionNotOnOrAfter value, whichever is shorter. You can provide a DurationSeconds value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see View the Maximum Session Duration Setting for a Role in the IAM User Guide. The maximum session duration limit applies when you use the AssumeRole* API operations or the assume-role* CLI commands. However the limit does not apply when you use those operations to create a console URL. For more information, see Using IAM Roles in the IAM User Guide. The temporary security credentials created by AssumeRoleWithSAML can be used to make API calls to any AWS service with the following exception: you cannot call the STS service's GetFederationToken or GetSessionToken API operations. Optionally, you can pass an IAM permissions policy to this operation. If you pass a policy to this operation, the resulting temporary credentials have the permissions of the assumed role and the policy that you pass. This gives you a way to further restrict the permissions for the resulting temporary security credentials. You cannot use the passed policy to grant permissions that are in excess of those allowed by the permissions policy of the role that is being assumed. For more information, see  Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity  in the IAM User Guide. Before your application can call AssumeRoleWithSAML, you must configure your SAML identity provider (IdP) to issue the claims required by AWS. Additionally, you must use AWS Identity and Access Management (IAM) to create a SAML provider entity in your AWS account that represents your identity provider. You must also create an IAM role that specifies this SAML provider in its trust policy.  Calling AssumeRoleWithSAML does not require the use of AWS security credentials. The identity of the caller is validated by using keys in the metadata document that is uploaded for the SAML provider entity for your identity provider.   Calling AssumeRoleWithSAML can result in an entry in your AWS CloudTrail logs. The entry includes the value in the NameID element of the SAML assertion. We recommend that you use a NameIDType that is not associated with any personally identifiable information (PII). For example, you could instead use the Persistent Identifier (urn:oasis:names:tc:SAML:2.0:nameid-format:persistent).  For more information, see the following resources:    About SAML 2.0-based Federation in the IAM User Guide.     Creating SAML Identity Providers in the IAM User Guide.     Configuring a Relying Party and Claims in the IAM User Guide.     Creating a Role for SAML 2.0 Federation in the IAM User Guide.   
   */
  assumeRoleWithSAML(callback?: (err: AWSError, data: STS.Types.AssumeRoleWithSAMLResponse) => void): Request<STS.Types.AssumeRoleWithSAMLResponse, AWSError>;
  /**
   * Returns a set of temporary security credentials for users who have been authenticated in a mobile or web application with a web identity provider. Example providers include Amazon Cognito, Login with Amazon, Facebook, Google, or any OpenID Connect-compatible identity provider.  For mobile applications, we recommend that you use Amazon Cognito. You can use Amazon Cognito with the AWS SDK for iOS Developer Guide and the AWS SDK for Android Developer Guide to uniquely identify a user. You can also supply the user with a consistent identity throughout the lifetime of an application. To learn more about Amazon Cognito, see Amazon Cognito Overview in the AWS SDK for Android Developer Guide guide and Amazon Cognito Overview in the AWS SDK for iOS Developer Guide.  Calling AssumeRoleWithWebIdentity does not require the use of AWS security credentials. Therefore, you can distribute an application (for example, on mobile devices) that requests temporary security credentials without including long-term AWS credentials in the application. You also don't need to deploy server-based proxy services that use long-term AWS credentials. Instead, the identity of the caller is validated by using a token from the web identity provider. For a comparison of AssumeRoleWithWebIdentity with the other API operations that produce temporary credentials, see Requesting Temporary Security Credentials and Comparing the AWS STS API operations in the IAM User Guide. The temporary security credentials returned by this API consist of an access key ID, a secret access key, and a security token. Applications can use these temporary security credentials to sign calls to AWS service API operations. By default, the temporary security credentials created by AssumeRoleWithWebIdentity last for one hour. However, you can use the optional DurationSeconds parameter to specify the duration of your session. You can provide a value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see View the Maximum Session Duration Setting for a Role in the IAM User Guide. The maximum session duration limit applies when you use the AssumeRole* API operations or the assume-role* CLI commands. However the limit does not apply when you use those operations to create a console URL. For more information, see Using IAM Roles in the IAM User Guide.  The temporary security credentials created by AssumeRoleWithWebIdentity can be used to make API calls to any AWS service with the following exception: you cannot call the STS service's GetFederationToken or GetSessionToken API operations. (Optional) You can pass an IAM permissions policy to this operation. If you pass a policy to this operation, the resulting temporary credentials have the permissions of the assumed role and the policy that you pass. This gives you a way to further restrict the permissions for the resulting temporary security credentials. You cannot use the passed policy to grant permissions that are in excess of those allowed by the permissions policy of the role that is being assumed. For more information, see  Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity  in the IAM User Guide. Before your application can call AssumeRoleWithWebIdentity, you must have an identity token from a supported identity provider and create a role that the application can assume. The role that your application assumes must trust the identity provider that is associated with the identity token. In other words, the identity provider must be specified in the role's trust policy.   Calling AssumeRoleWithWebIdentity can result in an entry in your AWS CloudTrail logs. The entry includes the Subject of the provided Web Identity Token. We recommend that you avoid using any personally identifiable information (PII) in this field. For example, you could instead use a GUID or a pairwise identifier, as suggested in the OIDC specification.  For more information about how to use web identity federation and the AssumeRoleWithWebIdentity API, see the following resources:     Using Web Identity Federation API Operations for Mobile Apps and Federation Through a Web-based Identity Provider.      Web Identity Federation Playground. Walk through the process of authenticating through Login with Amazon, Facebook, or Google, getting temporary security credentials, and then using those credentials to make a request to AWS.     AWS SDK for iOS Developer Guide and AWS SDK for Android Developer Guide. These toolkits contain sample apps that show how to invoke the identity providers, and then how to use the information from these providers to get and use temporary security credentials.     Web Identity Federation with Mobile Applications. This article discusses web identity federation and shows an example of how to use web identity federation to get access to content in Amazon S3.   
   */
  assumeRoleWithWebIdentity(params: STS.Types.AssumeRoleWithWebIdentityRequest, callback?: (err: AWSError, data: STS.Types.AssumeRoleWithWebIdentityResponse) => void): Request<STS.Types.AssumeRoleWithWebIdentityResponse, AWSError>;
  /**
   * Returns a set of temporary security credentials for users who have been authenticated in a mobile or web application with a web identity provider. Example providers include Amazon Cognito, Login with Amazon, Facebook, Google, or any OpenID Connect-compatible identity provider.  For mobile applications, we recommend that you use Amazon Cognito. You can use Amazon Cognito with the AWS SDK for iOS Developer Guide and the AWS SDK for Android Developer Guide to uniquely identify a user. You can also supply the user with a consistent identity throughout the lifetime of an application. To learn more about Amazon Cognito, see Amazon Cognito Overview in the AWS SDK for Android Developer Guide guide and Amazon Cognito Overview in the AWS SDK for iOS Developer Guide.  Calling AssumeRoleWithWebIdentity does not require the use of AWS security credentials. Therefore, you can distribute an application (for example, on mobile devices) that requests temporary security credentials without including long-term AWS credentials in the application. You also don't need to deploy server-based proxy services that use long-term AWS credentials. Instead, the identity of the caller is validated by using a token from the web identity provider. For a comparison of AssumeRoleWithWebIdentity with the other API operations that produce temporary credentials, see Requesting Temporary Security Credentials and Comparing the AWS STS API operations in the IAM User Guide. The temporary security credentials returned by this API consist of an access key ID, a secret access key, and a security token. Applications can use these temporary security credentials to sign calls to AWS service API operations. By default, the temporary security credentials created by AssumeRoleWithWebIdentity last for one hour. However, you can use the optional DurationSeconds parameter to specify the duration of your session. You can provide a value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see View the Maximum Session Duration Setting for a Role in the IAM User Guide. The maximum session duration limit applies when you use the AssumeRole* API operations or the assume-role* CLI commands. However the limit does not apply when you use those operations to create a console URL. For more information, see Using IAM Roles in the IAM User Guide.  The temporary security credentials created by AssumeRoleWithWebIdentity can be used to make API calls to any AWS service with the following exception: you cannot call the STS service's GetFederationToken or GetSessionToken API operations. (Optional) You can pass an IAM permissions policy to this operation. If you pass a policy to this operation, the resulting temporary credentials have the permissions of the assumed role and the policy that you pass. This gives you a way to further restrict the permissions for the resulting temporary security credentials. You cannot use the passed policy to grant permissions that are in excess of those allowed by the permissions policy of the role that is being assumed. For more information, see  Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity  in the IAM User Guide. Before your application can call AssumeRoleWithWebIdentity, you must have an identity token from a supported identity provider and create a role that the application can assume. The role that your application assumes must trust the identity provider that is associated with the identity token. In other words, the identity provider must be specified in the role's trust policy.   Calling AssumeRoleWithWebIdentity can result in an entry in your AWS CloudTrail logs. The entry includes the Subject of the provided Web Identity Token. We recommend that you avoid using any personally identifiable information (PII) in this field. For example, you could instead use a GUID or a pairwise identifier, as suggested in the OIDC specification.  For more information about how to use web identity federation and the AssumeRoleWithWebIdentity API, see the following resources:     Using Web Identity Federation API Operations for Mobile Apps and Federation Through a Web-based Identity Provider.      Web Identity Federation Playground. Walk through the process of authenticating through Login with Amazon, Facebook, or Google, getting temporary security credentials, and then using those credentials to make a request to AWS.     AWS SDK for iOS Developer Guide and AWS SDK for Android Developer Guide. These toolkits contain sample apps that show how to invoke the identity providers, and then how to use the information from these providers to get and use temporary security credentials.     Web Identity Federation with Mobile Applications. This article discusses web identity federation and shows an example of how to use web identity federation to get access to content in Amazon S3.   
   */
  assumeRoleWithWebIdentity(callback?: (err: AWSError, data: STS.Types.AssumeRoleWithWebIdentityResponse) => void): Request<STS.Types.AssumeRoleWithWebIdentityResponse, AWSError>;
  /**
   * Decodes additional information about the authorization status of a request from an encoded message returned in response to an AWS request. For example, if a user is not authorized to perform an operation that he or she has requested, the request returns a Client.UnauthorizedOperation response (an HTTP 403 response). Some AWS operations additionally return an encoded message that can provide details about this authorization failure.   Only certain AWS operations return an encoded authorization message. The documentation for an individual operation indicates whether that operation returns an encoded message in addition to returning an HTTP code.  The message is encoded because the details of the authorization status can constitute privileged information that the user who requested the operation should not see. To decode an authorization status message, a user must be granted permissions via an IAM policy to request the DecodeAuthorizationMessage (sts:DecodeAuthorizationMessage) action.  The decoded message includes the following type of information:   Whether the request was denied due to an explicit deny or due to the absence of an explicit allow. For more information, see Determining Whether a Request is Allowed or Denied in the IAM User Guide.    The principal who made the request.   The requested action.   The requested resource.   The values of condition keys in the context of the user's request.  
   */
  decodeAuthorizationMessage(params: STS.Types.DecodeAuthorizationMessageRequest, callback?: (err: AWSError, data: STS.Types.DecodeAuthorizationMessageResponse) => void): Request<STS.Types.DecodeAuthorizationMessageResponse, AWSError>;
  /**
   * Decodes additional information about the authorization status of a request from an encoded message returned in response to an AWS request. For example, if a user is not authorized to perform an operation that he or she has requested, the request returns a Client.UnauthorizedOperation response (an HTTP 403 response). Some AWS operations additionally return an encoded message that can provide details about this authorization failure.   Only certain AWS operations return an encoded authorization message. The documentation for an individual operation indicates whether that operation returns an encoded message in addition to returning an HTTP code.  The message is encoded because the details of the authorization status can constitute privileged information that the user who requested the operation should not see. To decode an authorization status message, a user must be granted permissions via an IAM policy to request the DecodeAuthorizationMessage (sts:DecodeAuthorizationMessage) action.  The decoded message includes the following type of information:   Whether the request was denied due to an explicit deny or due to the absence of an explicit allow. For more information, see Determining Whether a Request is Allowed or Denied in the IAM User Guide.    The principal who made the request.   The requested action.   The requested resource.   The values of condition keys in the context of the user's request.  
   */
  decodeAuthorizationMessage(callback?: (err: AWSError, data: STS.Types.DecodeAuthorizationMessageResponse) => void): Request<STS.Types.DecodeAuthorizationMessageResponse, AWSError>;
  /**
   * Returns details about the IAM identity whose credentials are used to call the API.
   */
  getCallerIdentity(params: STS.Types.GetCallerIdentityRequest, callback?: (err: AWSError, data: STS.Types.GetCallerIdentityResponse) => void): Request<STS.Types.GetCallerIdentityResponse, AWSError>;
  /**
   * Returns details about the IAM identity whose credentials are used to call the API.
   */
  getCallerIdentity(callback?: (err: AWSError, data: STS.Types.GetCallerIdentityResponse) => void): Request<STS.Types.GetCallerIdentityResponse, AWSError>;
  /**
   * Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for a federated user. A typical use is in a proxy application that gets temporary security credentials on behalf of distributed applications inside a corporate network. You must call the GetFederationToken operation using the long-term security credentials of an IAM user. As a result, this call is appropriate in contexts where those credentials can be safely stored, usually in a server-based application. For a comparison of GetFederationToken with the other API operations that produce temporary credentials, see Requesting Temporary Security Credentials and Comparing the AWS STS API operations in the IAM User Guide.  You can create a mobile-based or browser-based app that can authenticate users using a web identity provider like Login with Amazon, Facebook, Google, or an OpenID Connect-compatible identity provider. In this case, we recommend that you use Amazon Cognito or AssumeRoleWithWebIdentity. For more information, see Federation Through a Web-based Identity Provider.  You can also call GetFederationToken using the security credentials of an AWS account root user, but we do not recommend it. Instead, we recommend that you create an IAM user for the purpose of the proxy application. Then attach a policy to the IAM user that limits federated users to only the actions and resources that they need to access. For more information, see IAM Best Practices in the IAM User Guide.  The temporary credentials are valid for the specified duration, from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours). The default is 43,200 seconds (12 hours). Temporary credentials that are obtained by using AWS account root user credentials have a maximum duration of 3,600 seconds (1 hour). The temporary security credentials created by GetFederationToken can be used to make API calls to any AWS service with the following exceptions:   You cannot use these credentials to call any IAM API operations.   You cannot call any STS API operations except GetCallerIdentity.    Permissions  You must pass an IAM permissions policy to GetFederationToken. When you pass a policy to this operation, the resulting temporary credentials are defined by the intersection of your IAM user policies and the passed policy . The passed policy defines the permissions of the federated user. AWS allows the federated user's request only when both the attached policy and the IAM user policy explicitly allow the federated user to perform the requested action. The passed policy cannot grant more permissions than those that are defined in the IAM user policy. For more information about how permissions work, see Permissions for GetFederationToken. For information about using GetFederationToken to create temporary security credentials, see GetFederationToken—Federation Through a Custom Identity Broker. 
   */
  getFederationToken(params: STS.Types.GetFederationTokenRequest, callback?: (err: AWSError, data: STS.Types.GetFederationTokenResponse) => void): Request<STS.Types.GetFederationTokenResponse, AWSError>;
  /**
   * Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for a federated user. A typical use is in a proxy application that gets temporary security credentials on behalf of distributed applications inside a corporate network. You must call the GetFederationToken operation using the long-term security credentials of an IAM user. As a result, this call is appropriate in contexts where those credentials can be safely stored, usually in a server-based application. For a comparison of GetFederationToken with the other API operations that produce temporary credentials, see Requesting Temporary Security Credentials and Comparing the AWS STS API operations in the IAM User Guide.  You can create a mobile-based or browser-based app that can authenticate users using a web identity provider like Login with Amazon, Facebook, Google, or an OpenID Connect-compatible identity provider. In this case, we recommend that you use Amazon Cognito or AssumeRoleWithWebIdentity. For more information, see Federation Through a Web-based Identity Provider.  You can also call GetFederationToken using the security credentials of an AWS account root user, but we do not recommend it. Instead, we recommend that you create an IAM user for the purpose of the proxy application. Then attach a policy to the IAM user that limits federated users to only the actions and resources that they need to access. For more information, see IAM Best Practices in the IAM User Guide.  The temporary credentials are valid for the specified duration, from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours). The default is 43,200 seconds (12 hours). Temporary credentials that are obtained by using AWS account root user credentials have a maximum duration of 3,600 seconds (1 hour). The temporary security credentials created by GetFederationToken can be used to make API calls to any AWS service with the following exceptions:   You cannot use these credentials to call any IAM API operations.   You cannot call any STS API operations except GetCallerIdentity.    Permissions  You must pass an IAM permissions policy to GetFederationToken. When you pass a policy to this operation, the resulting temporary credentials are defined by the intersection of your IAM user policies and the passed policy . The passed policy defines the permissions of the federated user. AWS allows the federated user's request only when both the attached policy and the IAM user policy explicitly allow the federated user to perform the requested action. The passed policy cannot grant more permissions than those that are defined in the IAM user policy. For more information about how permissions work, see Permissions for GetFederationToken. For information about using GetFederationToken to create temporary security credentials, see GetFederationToken—Federation Through a Custom Identity Broker. 
   */
  getFederationToken(callback?: (err: AWSError, data: STS.Types.GetFederationTokenResponse) => void): Request<STS.Types.GetFederationTokenResponse, AWSError>;
  /**
   * Returns a set of temporary credentials for an AWS account or IAM user. The credentials consist of an access key ID, a secret access key, and a security token. Typically, you use GetSessionToken if you want to use MFA to protect programmatic calls to specific AWS API operations like Amazon EC2 StopInstances. MFA-enabled IAM users would need to call GetSessionToken and submit an MFA code that is associated with their MFA device. Using the temporary security credentials that are returned from the call, IAM users can then make programmatic calls to API operations that require MFA authentication. If you do not supply a correct MFA code, then the API returns an access denied error. For a comparison of GetSessionToken with the other API operations that produce temporary credentials, see Requesting Temporary Security Credentials and Comparing the AWS STS API operations in the IAM User Guide. The GetSessionToken operation must be called by using the long-term AWS security credentials of the AWS account or an IAM user. Credentials that are created by IAM users are valid for the duration that you specify. This duration can range from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours), with a default of 43,200 seconds (12 hours). Credentials that are created by using account credentials can range from 900 seconds (15 minutes) up to a maximum of 3,600 seconds (1 hour), with a default of 1 hour.  The temporary security credentials created by GetSessionToken can be used to make API calls to any AWS service with the following exceptions:   You cannot call any IAM API operations unless MFA authentication information is included in the request.   You cannot call any STS API except AssumeRole or GetCallerIdentity.    We recommend that you do not call GetSessionToken with AWS account root user credentials. Instead, follow our best practices by creating one or more IAM users, giving them the necessary permissions, and using IAM users for everyday interaction with AWS.   The permissions associated with the temporary security credentials returned by GetSessionToken are based on the permissions associated with account or IAM user whose credentials are used to call the operation. If GetSessionToken is called using AWS account root user credentials, the temporary credentials have root user permissions. Similarly, if GetSessionToken is called using the credentials of an IAM user, the temporary credentials have the same permissions as the IAM user.  For more information about using GetSessionToken to create temporary credentials, go to Temporary Credentials for Users in Untrusted Environments in the IAM User Guide. 
   */
  getSessionToken(params: STS.Types.GetSessionTokenRequest, callback?: (err: AWSError, data: STS.Types.GetSessionTokenResponse) => void): Request<STS.Types.GetSessionTokenResponse, AWSError>;
  /**
   * Returns a set of temporary credentials for an AWS account or IAM user. The credentials consist of an access key ID, a secret access key, and a security token. Typically, you use GetSessionToken if you want to use MFA to protect programmatic calls to specific AWS API operations like Amazon EC2 StopInstances. MFA-enabled IAM users would need to call GetSessionToken and submit an MFA code that is associated with their MFA device. Using the temporary security credentials that are returned from the call, IAM users can then make programmatic calls to API operations that require MFA authentication. If you do not supply a correct MFA code, then the API returns an access denied error. For a comparison of GetSessionToken with the other API operations that produce temporary credentials, see Requesting Temporary Security Credentials and Comparing the AWS STS API operations in the IAM User Guide. The GetSessionToken operation must be called by using the long-term AWS security credentials of the AWS account or an IAM user. Credentials that are created by IAM users are valid for the duration that you specify. This duration can range from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours), with a default of 43,200 seconds (12 hours). Credentials that are created by using account credentials can range from 900 seconds (15 minutes) up to a maximum of 3,600 seconds (1 hour), with a default of 1 hour.  The temporary security credentials created by GetSessionToken can be used to make API calls to any AWS service with the following exceptions:   You cannot call any IAM API operations unless MFA authentication information is included in the request.   You cannot call any STS API except AssumeRole or GetCallerIdentity.    We recommend that you do not call GetSessionToken with AWS account root user credentials. Instead, follow our best practices by creating one or more IAM users, giving them the necessary permissions, and using IAM users for everyday interaction with AWS.   The permissions associated with the temporary security credentials returned by GetSessionToken are based on the permissions associated with account or IAM user whose credentials are used to call the operation. If GetSessionToken is called using AWS account root user credentials, the temporary credentials have root user permissions. Similarly, if GetSessionToken is called using the credentials of an IAM user, the temporary credentials have the same permissions as the IAM user.  For more information about using GetSessionToken to create temporary credentials, go to Temporary Credentials for Users in Untrusted Environments in the IAM User Guide. 
   */
  getSessionToken(callback?: (err: AWSError, data: STS.Types.GetSessionTokenResponse) => void): Request<STS.Types.GetSessionTokenResponse, AWSError>;
}
declare namespace STS {
  export interface AssumeRoleRequest {
    /**
     * The Amazon Resource Name (ARN) of the role to assume.
     */
    RoleArn: arnType;
    /**
     * An identifier for the assumed role session. Use the role session name to uniquely identify a session when the same role is assumed by different principals or for different reasons. In cross-account scenarios, the role session name is visible to, and can be logged by the account that owns the role. The role session name is also used in the ARN of the assumed role principal. This means that subsequent cross-account API requests that use the temporary security credentials will expose the role session name to the external account in their AWS CloudTrail logs. The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-
     */
    RoleSessionName: roleSessionNameType;
    /**
     * An IAM policy in JSON format. This parameter is optional. If you pass a policy to this operation, the resulting temporary credentials have the permissions of the assumed role and the policy that you pass. This gives you a way to further restrict the permissions for the resulting temporary security credentials. You cannot use the passed policy to grant permissions that are in excess of those allowed by the permissions policy of the role that is being assumed. For more information, see  Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity  in the IAM User Guide. The format for this parameter, as described by its regex pattern, is a string of characters up to 2048 characters in length. The characters can be any ASCII character from the space character to the end of the valid character list (\u0020-\u00FF). It can also include the tab (\u0009), linefeed (\u000A), and carriage return (\u000D) characters.  The policy plaintext must be 2048 bytes or shorter. However, an internal conversion compresses it into a packed binary format with a separate limit. The PackedPolicySize response element indicates by percentage how close to the upper size limit the policy is, where 100 percent is the maximum allowed size. 
     */
    Policy?: sessionPolicyDocumentType;
    /**
     * The duration, in seconds, of the role session. The value can range from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. If you specify a value higher than this setting, the operation fails. For example, if you specify a session duration of 12 hours, but your administrator set the maximum session duration to 6 hours, your operation fails. To learn how to view the maximum value for your role, see View the Maximum Session Duration Setting for a Role in the IAM User Guide. By default, the value is set to 3600 seconds.   The DurationSeconds parameter is separate from the duration of a console session that you might request using the returned credentials. The request to the federation endpoint for a console sign-in token takes a SessionDuration parameter that specifies the maximum length of the console session. For more information, see Creating a URL that Enables Federated Users to Access the AWS Management Console in the IAM User Guide. 
     */
    DurationSeconds?: roleDurationSecondsType;
    /**
     * A unique identifier that might be required when you assume a role in another account. If the administrator of the account to which the role belongs provided you with an external ID, then provide that value in the ExternalId parameter. This value can be any string, such as a passphrase or account number. Because a cross-account role is usually set up to trust everyone in an account, the administrator of the trusting account might send an external ID to the administrator of the trusted account. That way, only someone with the ID can assume the role, rather than everyone in the account. For more information about the external ID, see How to Use an External ID When Granting Access to Your AWS Resources to a Third Party in the IAM User Guide. The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-
     */
    ExternalId?: externalIdType;
    /**
     * The identification number of the MFA device that is associated with the user who is making the AssumeRole call. Specify this value if the trust policy of the role being assumed includes a condition that requires MFA authentication. The value is either the serial number for a hardware device (such as GAHT12345678) or an Amazon Resource Name (ARN) for a virtual device (such as arn:aws:iam::123456789012:mfa/user). The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-
     */
    SerialNumber?: serialNumberType;
    /**
     * The value provided by the MFA device, if the trust policy of the role being assumed requires MFA (that is, if the policy includes a condition that tests for MFA). If the role being assumed requires MFA and if the TokenCode value is missing or expired, the AssumeRole call returns an "access denied" error. The format for this parameter, as described by its regex pattern, is a sequence of six numeric digits.
     */
    TokenCode?: tokenCodeType;
  }
  export interface AssumeRoleResponse {
    /**
     * The temporary security credentials, which include an access key ID, a secret access key, and a security (or session) token.  The size of the security token that STS API operations return is not fixed. We strongly recommend that you make no assumptions about the maximum size. As of this writing, the typical size is less than 4096 bytes, but that can vary. Also, future updates to AWS might require larger sizes. 
     */
    Credentials?: Credentials;
    /**
     * The Amazon Resource Name (ARN) and the assumed role ID, which are identifiers that you can use to refer to the resulting temporary security credentials. For example, you can reference these credentials as a principal in a resource-based policy by using the ARN or assumed role ID. The ARN and ID include the RoleSessionName that you specified when you called AssumeRole. 
     */
    AssumedRoleUser?: AssumedRoleUser;
    /**
     * A percentage value that indicates the size of the policy in packed form. The service rejects any policy with a packed size greater than 100 percent, which means the policy exceeded the allowed space.
     */
    PackedPolicySize?: nonNegativeIntegerType;
  }
  export interface AssumeRoleWithSAMLRequest {
    /**
     * The Amazon Resource Name (ARN) of the role that the caller is assuming.
     */
    RoleArn: arnType;
    /**
     * The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the IdP.
     */
    PrincipalArn: arnType;
    /**
     * The base-64 encoded SAML authentication response provided by the IdP. For more information, see Configuring a Relying Party and Adding Claims in the IAM User Guide. 
     */
    SAMLAssertion: SAMLAssertionType;
    /**
     * An IAM policy in JSON format. The policy parameter is optional. If you pass a policy to this operation, the resulting temporary credentials have the permissions of the assumed role and the policy that you pass. This gives you a way to further restrict the permissions for the resulting temporary security credentials. You cannot use the passed policy to grant permissions that are in excess of those allowed by the permissions policy of the role that is being assumed. For more information, see  Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity  in the IAM User Guide.  The format for this parameter, as described by its regex pattern, is a string of characters up to 2048 characters in length. The characters can be any ASCII character from the space character to the end of the valid character list (\u0020-\u00FF). It can also include the tab (\u0009), linefeed (\u000A), and carriage return (\u000D) characters.  The policy plaintext must be 2048 bytes or shorter. However, an internal conversion compresses it into a packed binary format with a separate limit. The PackedPolicySize response element indicates by percentage how close to the upper size limit the policy is, where 100 percent is the maximum allowed size. 
     */
    Policy?: sessionPolicyDocumentType;
    /**
     * The duration, in seconds, of the role session. Your role session lasts for the duration that you specify for the DurationSeconds parameter, or until the time specified in the SAML authentication response's SessionNotOnOrAfter value, whichever is shorter. You can provide a DurationSeconds value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. If you specify a value higher than this setting, the operation fails. For example, if you specify a session duration of 12 hours, but your administrator set the maximum session duration to 6 hours, your operation fails. To learn how to view the maximum value for your role, see View the Maximum Session Duration Setting for a Role in the IAM User Guide. By default, the value is set to 3600 seconds.   The DurationSeconds parameter is separate from the duration of a console session that you might request using the returned credentials. The request to the federation endpoint for a console sign-in token takes a SessionDuration parameter that specifies the maximum length of the console session. For more information, see Creating a URL that Enables Federated Users to Access the AWS Management Console in the IAM User Guide. 
     */
    DurationSeconds?: roleDurationSecondsType;
  }
  export interface AssumeRoleWithSAMLResponse {
    /**
     * The temporary security credentials, which include an access key ID, a secret access key, and a security (or session) token.  The size of the security token that STS API operations return is not fixed. We strongly recommend that you make no assumptions about the maximum size. As of this writing, the typical size is less than 4096 bytes, but that can vary. Also, future updates to AWS might require larger sizes. 
     */
    Credentials?: Credentials;
    /**
     * The identifiers for the temporary security credentials that the operation returns.
     */
    AssumedRoleUser?: AssumedRoleUser;
    /**
     * A percentage value that indicates the size of the policy in packed form. The service rejects any policy with a packed size greater than 100 percent, which means the policy exceeded the allowed space.
     */
    PackedPolicySize?: nonNegativeIntegerType;
    /**
     * The value of the NameID element in the Subject element of the SAML assertion.
     */
    Subject?: Subject;
    /**
     *  The format of the name ID, as defined by the Format attribute in the NameID element of the SAML assertion. Typical examples of the format are transient or persistent.   If the format includes the prefix urn:oasis:names:tc:SAML:2.0:nameid-format, that prefix is removed. For example, urn:oasis:names:tc:SAML:2.0:nameid-format:transient is returned as transient. If the format includes any other prefix, the format is returned with no modifications.
     */
    SubjectType?: SubjectType;
    /**
     * The value of the Issuer element of the SAML assertion.
     */
    Issuer?: Issuer;
    /**
     *  The value of the Recipient attribute of the SubjectConfirmationData element of the SAML assertion. 
     */
    Audience?: Audience;
    /**
     * A hash value based on the concatenation of the Issuer response value, the AWS account ID, and the friendly name (the last part of the ARN) of the SAML provider in IAM. The combination of NameQualifier and Subject can be used to uniquely identify a federated user.  The following pseudocode shows how the hash value is calculated:  BASE64 ( SHA1 ( "https://example.com/saml" + "123456789012" + "/MySAMLIdP" ) ) 
     */
    NameQualifier?: NameQualifier;
  }
  export interface AssumeRoleWithWebIdentityRequest {
    /**
     * The Amazon Resource Name (ARN) of the role that the caller is assuming.
     */
    RoleArn: arnType;
    /**
     * An identifier for the assumed role session. Typically, you pass the name or identifier that is associated with the user who is using your application. That way, the temporary security credentials that your application will use are associated with that user. This session name is included as part of the ARN and assumed role ID in the AssumedRoleUser response element. The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-
     */
    RoleSessionName: roleSessionNameType;
    /**
     * The OAuth 2.0 access token or OpenID Connect ID token that is provided by the identity provider. Your application must get this token by authenticating the user who is using your application with a web identity provider before the application makes an AssumeRoleWithWebIdentity call. 
     */
    WebIdentityToken: clientTokenType;
    /**
     * The fully qualified host component of the domain name of the identity provider. Specify this value only for OAuth 2.0 access tokens. Currently www.amazon.com and graph.facebook.com are the only supported identity providers for OAuth 2.0 access tokens. Do not include URL schemes and port numbers. Do not specify this value for OpenID Connect ID tokens.
     */
    ProviderId?: urlType;
    /**
     * An IAM policy in JSON format. The policy parameter is optional. If you pass a policy to this operation, the resulting temporary credentials have the permissions of the assumed role and the policy that you pass. This gives you a way to further restrict the permissions for the resulting temporary security credentials. You cannot use the passed policy to grant permissions that are in excess of those allowed by the permissions policy of the role that is being assumed. For more information, see  Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity  in the IAM User Guide.  The format for this parameter, as described by its regex pattern, is a string of characters up to 2048 characters in length. The characters can be any ASCII character from the space character to the end of the valid character list (\u0020-\u00FF). It can also include the tab (\u0009), linefeed (\u000A), and carriage return (\u000D) characters.  The policy plaintext must be 2048 bytes or shorter. However, an internal conversion compresses it into a packed binary format with a separate limit. The PackedPolicySize response element indicates by percentage how close to the upper size limit the policy is, where 100 percent is the maximum allowed size. 
     */
    Policy?: sessionPolicyDocumentType;
    /**
     * The duration, in seconds, of the role session. The value can range from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. If you specify a value higher than this setting, the operation fails. For example, if you specify a session duration of 12 hours, but your administrator set the maximum session duration to 6 hours, your operation fails. To learn how to view the maximum value for your role, see View the Maximum Session Duration Setting for a Role in the IAM User Guide. By default, the value is set to 3600 seconds.   The DurationSeconds parameter is separate from the duration of a console session that you might request using the returned credentials. The request to the federation endpoint for a console sign-in token takes a SessionDuration parameter that specifies the maximum length of the console session. For more information, see Creating a URL that Enables Federated Users to Access the AWS Management Console in the IAM User Guide. 
     */
    DurationSeconds?: roleDurationSecondsType;
  }
  export interface AssumeRoleWithWebIdentityResponse {
    /**
     * The temporary security credentials, which include an access key ID, a secret access key, and a security token.  The size of the security token that STS API operations return is not fixed. We strongly recommend that you make no assumptions about the maximum size. As of this writing, the typical size is less than 4096 bytes, but that can vary. Also, future updates to AWS might require larger sizes. 
     */
    Credentials?: Credentials;
    /**
     * The unique user identifier that is returned by the identity provider. This identifier is associated with the WebIdentityToken that was submitted with the AssumeRoleWithWebIdentity call. The identifier is typically unique to the user and the application that acquired the WebIdentityToken (pairwise identifier). For OpenID Connect ID tokens, this field contains the value returned by the identity provider as the token's sub (Subject) claim. 
     */
    SubjectFromWebIdentityToken?: webIdentitySubjectType;
    /**
     * The Amazon Resource Name (ARN) and the assumed role ID, which are identifiers that you can use to refer to the resulting temporary security credentials. For example, you can reference these credentials as a principal in a resource-based policy by using the ARN or assumed role ID. The ARN and ID include the RoleSessionName that you specified when you called AssumeRole. 
     */
    AssumedRoleUser?: AssumedRoleUser;
    /**
     * A percentage value that indicates the size of the policy in packed form. The service rejects any policy with a packed size greater than 100 percent, which means the policy exceeded the allowed space.
     */
    PackedPolicySize?: nonNegativeIntegerType;
    /**
     *  The issuing authority of the web identity token presented. For OpenID Connect ID tokens, this contains the value of the iss field. For OAuth 2.0 access tokens, this contains the value of the ProviderId parameter that was passed in the AssumeRoleWithWebIdentity request.
     */
    Provider?: Issuer;
    /**
     * The intended audience (also known as client ID) of the web identity token. This is traditionally the client identifier issued to the application that requested the web identity token.
     */
    Audience?: Audience;
  }
  export interface AssumedRoleUser {
    /**
     * A unique identifier that contains the role ID and the role session name of the role that is being assumed. The role ID is generated by AWS when the role is created.
     */
    AssumedRoleId: assumedRoleIdType;
    /**
     * The ARN of the temporary security credentials that are returned from the AssumeRole action. For more information about ARNs and how to use them in policies, see IAM Identifiers in Using IAM. 
     */
    Arn: arnType;
  }
  export type Audience = string;
  export interface Credentials {
    /**
     * The access key ID that identifies the temporary security credentials.
     */
    AccessKeyId: accessKeyIdType;
    /**
     * The secret access key that can be used to sign requests.
     */
    SecretAccessKey: accessKeySecretType;
    /**
     * The token that users must pass to the service API to use the temporary credentials.
     */
    SessionToken: tokenType;
    /**
     * The date on which the current credentials expire.
     */
    Expiration: dateType;
  }
  export interface DecodeAuthorizationMessageRequest {
    /**
     * The encoded message that was returned with the response.
     */
    EncodedMessage: encodedMessageType;
  }
  export interface DecodeAuthorizationMessageResponse {
    /**
     * An XML document that contains the decoded message.
     */
    DecodedMessage?: decodedMessageType;
  }
  export interface FederatedUser {
    /**
     * The string that identifies the federated user associated with the credentials, similar to the unique ID of an IAM user.
     */
    FederatedUserId: federatedIdType;
    /**
     * The ARN that specifies the federated user that is associated with the credentials. For more information about ARNs and how to use them in policies, see IAM Identifiers in Using IAM. 
     */
    Arn: arnType;
  }
  export interface GetCallerIdentityRequest {
  }
  export interface GetCallerIdentityResponse {
    /**
     * The unique identifier of the calling entity. The exact value depends on the type of entity that is making the call. The values returned are those listed in the aws:userid column in the Principal table found on the Policy Variables reference page in the IAM User Guide.
     */
    UserId?: userIdType;
    /**
     * The AWS account ID number of the account that owns or contains the calling entity.
     */
    Account?: accountType;
    /**
     * The AWS ARN associated with the calling entity.
     */
    Arn?: arnType;
  }
  export interface GetFederationTokenRequest {
    /**
     * The name of the federated user. The name is used as an identifier for the temporary security credentials (such as Bob). For example, you can reference the federated user name in a resource-based policy, such as in an Amazon S3 bucket policy. The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-
     */
    Name: userNameType;
    /**
     * An IAM policy in JSON format. You must pass an IAM permissions policy to GetFederationToken. When you pass a policy to this operation, the resulting temporary credentials are defined by the intersection of your IAM user policies and the policy that you pass. The passed policy defines the permissions of the federated user. AWS allows the federated user's request only when both the attached policy and the IAM user policy explicitly allow the federated user to perform the requested action. The passed policy cannot grant more permissions than those that are defined in the IAM user policy. The format for this parameter, as described by its regex pattern, is a string of characters up to 2048 characters in length. The characters can be any ASCII character from the space character to the end of the valid character list (\u0020-\u00FF). It can also include the tab (\u0009), linefeed (\u000A), and carriage return (\u000D) characters.  The policy plaintext must be 2048 bytes or shorter. However, an internal conversion compresses it into a packed binary format with a separate limit. The PackedPolicySize response element indicates by percentage how close to the upper size limit the policy is, where 100 percent is the maximum allowed size.  For more information about how permissions work, see Permissions for GetFederationToken.
     */
    Policy?: sessionPolicyDocumentType;
    /**
     * The duration, in seconds, that the session should last. Acceptable durations for federation sessions range from 900 seconds (15 minutes) to 129,600 seconds (36 hours), with 43,200 seconds (12 hours) as the default. Sessions obtained using AWS account root user credentials are restricted to a maximum of 3,600 seconds (one hour). If the specified duration is longer than one hour, the session obtained by using root user credentials defaults to one hour.
     */
    DurationSeconds?: durationSecondsType;
  }
  export interface GetFederationTokenResponse {
    /**
     * The temporary security credentials, which include an access key ID, a secret access key, and a security (or session) token.  The size of the security token that STS API operations return is not fixed. We strongly recommend that you make no assumptions about the maximum size. As of this writing, the typical size is less than 4096 bytes, but that can vary. Also, future updates to AWS might require larger sizes. 
     */
    Credentials?: Credentials;
    /**
     * Identifiers for the federated user associated with the credentials (such as arn:aws:sts::123456789012:federated-user/Bob or 123456789012:Bob). You can use the federated user's ARN in your resource-based policies, such as an Amazon S3 bucket policy. 
     */
    FederatedUser?: FederatedUser;
    /**
     * A percentage value indicating the size of the policy in packed form. The service rejects policies for which the packed size is greater than 100 percent of the allowed value.
     */
    PackedPolicySize?: nonNegativeIntegerType;
  }
  export interface GetSessionTokenRequest {
    /**
     * The duration, in seconds, that the credentials should remain valid. Acceptable durations for IAM user sessions range from 900 seconds (15 minutes) to 129,600 seconds (36 hours), with 43,200 seconds (12 hours) as the default. Sessions for AWS account owners are restricted to a maximum of 3,600 seconds (one hour). If the duration is longer than one hour, the session for AWS account owners defaults to one hour.
     */
    DurationSeconds?: durationSecondsType;
    /**
     * The identification number of the MFA device that is associated with the IAM user who is making the GetSessionToken call. Specify this value if the IAM user has a policy that requires MFA authentication. The value is either the serial number for a hardware device (such as GAHT12345678) or an Amazon Resource Name (ARN) for a virtual device (such as arn:aws:iam::123456789012:mfa/user). You can find the device for an IAM user by going to the AWS Management Console and viewing the user's security credentials.  The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-
     */
    SerialNumber?: serialNumberType;
    /**
     * The value provided by the MFA device, if MFA is required. If any policy requires the IAM user to submit an MFA code, specify this value. If MFA authentication is required, the user must provide a code when requesting a set of temporary security credentials. A user who fails to provide the code receives an "access denied" response when requesting resources that require MFA authentication. The format for this parameter, as described by its regex pattern, is a sequence of six numeric digits.
     */
    TokenCode?: tokenCodeType;
  }
  export interface GetSessionTokenResponse {
    /**
     * The temporary security credentials, which include an access key ID, a secret access key, and a security (or session) token.  The size of the security token that STS API operations return is not fixed. We strongly recommend that you make no assumptions about the maximum size. As of this writing, the typical size is less than 4096 bytes, but that can vary. Also, future updates to AWS might require larger sizes. 
     */
    Credentials?: Credentials;
  }
  export type Issuer = string;
  export type NameQualifier = string;
  export type SAMLAssertionType = string;
  export type Subject = string;
  export type SubjectType = string;
  export type accessKeyIdType = string;
  export type accessKeySecretType = string;
  export type accountType = string;
  export type arnType = string;
  export type assumedRoleIdType = string;
  export type clientTokenType = string;
  export type dateType = Date;
  export type decodedMessageType = string;
  export type durationSecondsType = number;
  export type encodedMessageType = string;
  export type externalIdType = string;
  export type federatedIdType = string;
  export type nonNegativeIntegerType = number;
  export type roleDurationSecondsType = number;
  export type roleSessionNameType = string;
  export type serialNumberType = string;
  export type sessionPolicyDocumentType = string;
  export type tokenCodeType = string;
  export type tokenType = string;
  export type urlType = string;
  export type userIdType = string;
  export type userNameType = string;
  export type webIdentitySubjectType = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2011-06-15"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the STS client.
   */
  export import Types = STS;
}
export = STS;
