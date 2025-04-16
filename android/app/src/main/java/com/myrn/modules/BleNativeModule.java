package com.myrn.modules;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class BleNativeModule extends ReactContextBaseJavaModule {
    public BleNativeModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "BleNativeModule";
    }

    @ReactMethod
    public String doSomething() {
        System.out.println("测试----------》");
        return "AAAAAAAAAAAAAAA1231232DFSD";
    }
}