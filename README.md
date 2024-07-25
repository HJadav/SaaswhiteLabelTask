git clone https://github.com/HJadav/SaaswhiteLabelTask.git
cd tastSigzen
**Install Dependencies**: npm install
**Install CocoaPods (iOS only)** cd ios // pod install


**for Android Run SAAS Build** ==> ENVFILE=.env ./gradlew installSaasDebug
**for Androd Whitelabel Build** ==> ENVFILE=.env.whiteLabel ./gradlew installWhiteLabelDebug
**Note** make user Android emulator open or device is connected if not app is not lunch.

**For Ios Run SAAS BUILD**   ==> xcodebuild -scheme WhiteLabel -configuration Debug -sdk iphoneos
**For Ios Run SAAS BUILD**   ==> xcodebuild -scheme Saas -configuration Debug -sdk iphoneos




