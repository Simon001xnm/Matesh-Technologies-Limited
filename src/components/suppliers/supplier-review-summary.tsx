import type { Review } from "@/types";
import { summarizeReviews } from "@/ai/flows/summarize-reviews";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RatingStars } from "@/components/shared/rating-stars";
import { Separator } from "@/components/ui/separator";
import { Bot } from "lucide-react";

interface SupplierReviewSummaryProps {
  supplierName: string;
  reviews: Review[];
}

export async function SupplierReviewSummary({ supplierName, reviews }: SupplierReviewSummaryProps) {
  let aiSummary: string | null = null;
  if (reviews && reviews.length > 0) {
     try {
        const reviewTexts = reviews.map(r => r.comment);
        const summaryOutput = await summarizeReviews({
            reviews: reviewTexts,
            entityType: 'supplier',
            entityName: supplierName,
        });
        aiSummary = summaryOutput.summary;
    } catch (error) {
        console.error("Failed to generate supplier review summary:", error);
    }
  }
  
  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    : 0;

  return (
    <Card className="mt-10 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Supplier Reviews</CardTitle>
         {reviews.length > 0 && (
          <div className="flex items-center gap-2 mt-2">
            <RatingStars rating={averageRating} size={20} />
            <span className="text-muted-foreground">
              {averageRating.toFixed(1)} out of 5 ({reviews.length} reviews)
            </span>
          </div>
        )}
      </CardHeader>
      <CardContent>
        {aiSummary && (
          <div className="mb-6 p-4 bg-accent/10 rounded-lg border border-accent/30">
             <div className="flex items-center text-primary mb-2">
                <Bot className="h-5 w-5 mr-2" />
                <h4 className="font-semibold">AI Powered Summary</h4>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">{aiSummary}</p>
          </div>
        )}
        {reviews.length > 0 ? (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="pb-6 border-b last:border-b-0 last:pb-0">
                <div className="flex items-start space-x-3">
                  <Avatar>
                    <AvatarImage src={review.avatarUrl || `https://avatar.vercel.sh/${review.author}.png`} alt={review.author} />
                    <AvatarFallback>{review.author.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="font-semibold text-sm">{review.author}</p>
                      <RatingStars rating={review.rating} size={14} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-foreground/90 leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No reviews yet for this supplier.</p>
        )}
      </CardContent>
    </Card>
  );
}
