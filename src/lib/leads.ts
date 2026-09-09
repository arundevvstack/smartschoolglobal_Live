export interface LeadAttribution {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  landingPage?: string;
  referrer?: string;
}

export interface DemoLead {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  institutionName: string;
  institutionType: "k-12" | "higher-ed" | "multi-campus" | "international" | "other";
  studentCount: string;
  role: string;
  attribution?: LeadAttribution;
}

export interface LeadSubmissionResult {
  success: boolean;
  message?: string;
}

/**
 * Service to submit demo leads.
 * Abstracts the Supabase implementation.
 */
export async function submitDemoLead(lead: DemoLead): Promise<LeadSubmissionResult> {
  // Check if real implementation is available via env var
  const useRealImplementation = process.env.NEXT_PUBLIC_USE_REAL_LEADS === "true";

  if (useRealImplementation) {
    try {
      // Supabase implementation to be added when credentials are available.
      // await supabase.from('leads').insert([lead]);
      console.log("Real implementation would be called here.");
      return { success: true };
    } catch (error: any) {
      console.error("Error submitting lead:", error);
      return { success: false, message: error.message || "Failed to submit lead." };
    }
  }

  // Mock implementation for development
  console.log("MOCK: Lead submitted successfully:", lead);
  
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  return { success: true };
}
