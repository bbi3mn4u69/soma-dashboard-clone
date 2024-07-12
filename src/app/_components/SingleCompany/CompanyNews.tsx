import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { SignleNews } from "./SingleNews";
import { api } from "~/trpc/react";
import CompanyNewsSkeleton from "./CompanyNewsSkeleton";
const CompanyNews = ({ companyId }: { companyId: string }) => {
  const { data: articles, isLoading } = api.companySlug.getCompanyNews.useQuery(
    {
      companyId: companyId,
    },
  );
  if (articles?.length === 0) {
    return (
      <>
        <div className="px-7">
          <Card className="rounded-md shadow-small">
            <CardBody className="my-7">
              <div className="min-w-screen-md mx-auto max-w-screen-md text-center text-xl font-bold">
                Not Found News
              </div>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        <div className="px-7">
          <Card className="rounded-md shadow-small">
            <CardBody className="my-7">
              <div className="min-w-screen-sm mx-auto max-w-screen-sm">
                <CompanyNewsSkeleton></CompanyNewsSkeleton>
              </div>
            </CardBody>
          </Card>
        </div>
      </>
    );
  } else {
    {
      return (
        <div className="px-7">
          <Card className="rounded-md shadow-small">
            <CardBody className="my-7">
              <div className="min-w-screen-sm mx-auto max-w-screen-sm">
                {articles?.map((article) => (
                  <SignleNews
                    key={article.id}
                    sourceUrl={article.url}
                    publishedAt={article.publishedAt ?? ""}
                    title={article.title}
                  />
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      );
    }
  }
};

export default CompanyNews;
