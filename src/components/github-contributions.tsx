"use client";

import { useEffect, useState } from 'react';

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionsData {
  weeks: {
    contributionDays: ContributionDay[];
  }[];
  totalContributions: number;
}

export function GitHubContributions() {
  const [contributions, setContributions] = useState<ContributionsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                user(login: "shitanshubhushan") {
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          contributionCount
                          date
                        }
                      }
                    }
                  }
                }
              }
            `
          }),
        });

        const data = await response.json();
        const contributionsData = data.data.user.contributionsCollection.contributionCalendar;
        setContributions(contributionsData);
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

  if (loading) return <div className="text-sm text-muted-foreground">Loading contributions...</div>;
  if (!contributions) return null;

  return (
    <div className="w-full rounded-lg bg-[#0d1117] border border-[#30363d] p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-[#e6edf3]">GitHub Contributions</h2>
        <span className="text-sm text-[#7d8590]">
          {contributions.totalContributions} contributions in the last year
        </span>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="w-full">
          {/* Contribution grid */}
          <div className="flex gap-[2px]">
            {contributions.weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[2px]">
                {week.contributionDays.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-[12px] h-[12px] rounded-sm ${getContributionColor(day.contributionCount)}`}
                    title={`${day.contributionCount} contributions on ${new Date(day.date).toLocaleDateString()}`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-2 items-center">
            <div className="flex items-center gap-2 text-xs text-[#7d8590]">
              <span>Less</span>
              <div className="flex gap-[2px]">
                {[0, 3, 6, 9, 12].map((level) => (
                  <div
                    key={level}
                    className={`w-[12px] h-[12px] rounded-sm ${getContributionColor(level)}`}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getContributionColor(count: number): string {
  if (count === 0) return 'bg-[#161b22] border border-[#30363d]';
  if (count <= 3) return 'bg-[#0e4429]';
  if (count <= 6) return 'bg-[#006d32]';
  if (count <= 9) return 'bg-[#26a641]';
  return 'bg-[#39d353]';
} 