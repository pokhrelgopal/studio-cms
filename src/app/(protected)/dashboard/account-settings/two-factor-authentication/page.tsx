"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import CardContainer from "@/components/atoms/card-container";
import { Badge } from "@/components/ui/badge";

const TwoFactorAuthenticationPage = () => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  const handleEnable2FA = () => {
    console.log("Enabling Two-Factor Authentication");
    setIs2FAEnabled(true);
  };

  const handleDisable2FA = () => {
    console.log("Disabling Two-Factor Authentication");
    setIs2FAEnabled(false);
  };

  return (
    <CardContainer>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-600 mt-1">
              {is2FAEnabled
                ? "Your account is protected with two-factor authentication"
                : "Secure your account with an additional verification step"}
            </p>
          </div>
          <Badge variant={is2FAEnabled ? "default" : "secondary"}>
            {is2FAEnabled ? "Enabled" : "Disabled"}
          </Badge>
        </div>

        <div className="pt-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">
                Authenticator apps (Google Authenticator, Authy, etc.)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">SMS verification (when available)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Backup recovery codes</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4">
          {is2FAEnabled ? (
            <>
              <Button
                onClick={handleDisable2FA}
                variant="outline"
                className="rounded-full"
              >
                Disable 2FA
              </Button>
              <Button variant="outline" className="rounded-full">
                View Recovery Codes
              </Button>
            </>
          ) : (
            <Button onClick={handleEnable2FA} className="rounded-full">
              Enable Two-Factor Authentication
            </Button>
          )}
        </div>
      </div>
    </CardContainer>
  );
};

export default TwoFactorAuthenticationPage;
