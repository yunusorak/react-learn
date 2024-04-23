import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

export function ToastDemo({ title = "null", description = "null", children }) {
  const { toast } = useToast();

  const runToast = () => {
    toast({
      title: title,
      description: description,
    });
  };

  useEffect(() => {
    runToast();
  }, []);

  return (
    <Button variant="outline" className="hidden" onClick={runToast}>
      {children}
    </Button>
  );
}
