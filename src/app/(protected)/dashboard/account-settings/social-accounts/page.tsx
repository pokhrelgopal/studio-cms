"use client";
import React from "react";

import SplitFormContainer from "@/components/molecules/split-form-container";
import { Button } from "@/components/ui/button";
import CardContainer from "@/components/atoms/card-container";

const SocialAccountsPage = () => {
  const socialAccounts = [
    {
      name: "Google",
      description: "Connect with your Google account",
      connected: false,
      icon: "🔗", // You can replace with actual icons
    },
    {
      name: "Facebook",
      description: "Connect with your Facebook account",
      connected: false,
      icon: "🔗",
    },
    {
      name: "GitHub",
      description: "Connect with your GitHub account",
      connected: true,
      icon: "🔗",
    },
  ];

  const handleConnect = (accountName: string) => {
    console.log(`Connecting to ${accountName}`);
  };

  const handleDisconnect = (accountName: string) => {
    console.log(`Disconnecting from ${accountName}`);
  };

  return (
    <SplitFormContainer
      title="Social Accounts"
      description="Connect your social media accounts for easier login and sharing"
    >
      <div className="space-y-6">
        {socialAccounts.map((account) => (
          <div key={account.name} className="px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{account.icon}</div>
                <div>
                  <h4 className="font-medium">{account.name}</h4>
                  <p className="text-sm text-gray-600">{account.description}</p>
                </div>
              </div>
              <div>
                {account.connected ? (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-green-600 font-medium">
                      Connected
                    </span>
                    <Button
                      onClick={() => handleDisconnect(account.name)}
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      Disconnect
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => handleConnect(account.name)}
                    className="rounded-full"
                    size="sm"
                  >
                    Connect
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SplitFormContainer>
  );
};

export default SocialAccountsPage;
111111